import { FastifyInstance } from "fastify";
import { prismaClient } from "../prisma";
import { z } from "zod";
import bcrypt from "bcrypt";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

const createAdminSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(1),
});

const updateAdminSchema = z.object({
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    name: z.string().min(1).optional(),
});

export const adminRoutes = async (app: FastifyInstance) => {

    // Login do admin
    app.post("/admin/login", async (request, reply) => {
        const { email, password } = loginSchema.parse(request.body);

        const admin = await prismaClient.admin.findUnique({
            where: { email }
        });

        if (!admin) {
            return reply.status(401).send({ 
                message: "Credenciais inválidas" 
            });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);

        if (!isPasswordValid) {
            return reply.status(401).send({ 
                message: "Credenciais inválidas" 
            });
        }

        // Remover senha do retorno
        const { password: _, ...adminWithoutPassword } = admin;

        return {
            message: "Login realizado com sucesso",
            admin: adminWithoutPassword
        };
    });

    // Listar todos os admins (sem senhas)
    app.get("/admin", async (request, reply) => {
        const admins = await prismaClient.admin.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return admins;
    });

    // Buscar admin por ID
    app.get("/admin/:id", async (request, reply) => {
        const { id } = request.params as { id: string };

        const admin = await prismaClient.admin.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (!admin) {
            return reply.status(404).send({ 
                message: "Admin não encontrado" 
            });
        }

        return admin;
    });

    // Criar novo admin
    app.post("/admin", async (request, reply) => {
        const data = createAdminSchema.parse(request.body);

        // Verificar se o email já existe
        const existingAdmin = await prismaClient.admin.findUnique({
            where: { email: data.email }
        });

        if (existingAdmin) {
            return reply.status(400).send({ 
                message: "Email já está em uso" 
            });
        }

        // Criptografar a senha
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        const admin = await prismaClient.admin.create({
            data: {
                email: data.email,
                password: hashedPassword,
                name: data.name
            },
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return {
            message: "Admin criado com sucesso",
            admin
        };
    });

    // Atualizar admin
    app.put("/admin/:id", async (request, reply) => {
        const { id } = request.params as { id: string };
        const data = updateAdminSchema.parse(request.body);

        const existingAdmin = await prismaClient.admin.findUnique({
            where: { id: parseInt(id) }
        });

        if (!existingAdmin) {
            return reply.status(404).send({ 
                message: "Admin não encontrado" 
            });
        }

        // Se está atualizando email, verificar se não existe outro admin com esse email
        if (data.email && data.email !== existingAdmin.email) {
            const emailInUse = await prismaClient.admin.findUnique({
                where: { email: data.email }
            });

            if (emailInUse) {
                return reply.status(400).send({ 
                    message: "Email já está em uso" 
                });
            }
        }

        // Preparar dados para atualização
        const updateData: any = {};
        
        if (data.email) updateData.email = data.email;
        if (data.name) updateData.name = data.name;
        
        // Se está atualizando senha, criptografar
        if (data.password) {
            const saltRounds = 12;
            updateData.password = await bcrypt.hash(data.password, saltRounds);
        }

        const admin = await prismaClient.admin.update({
            where: { id: parseInt(id) },
            data: updateData,
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return {
            message: "Admin atualizado com sucesso",
            admin
        };
    });

    // Deletar admin
    app.delete("/admin/:id", async (request, reply) => {
        const { id } = request.params as { id: string };

        const existingAdmin = await prismaClient.admin.findUnique({
            where: { id: parseInt(id) }
        });

        if (!existingAdmin) {
            return reply.status(404).send({ 
                message: "Admin não encontrado" 
            });
        }

        // Verificar se não é o último admin
        const adminCount = await prismaClient.admin.count();
        
        if (adminCount <= 1) {
            return reply.status(400).send({ 
                message: "Não é possível deletar o último admin" 
            });
        }

        await prismaClient.admin.delete({
            where: { id: parseInt(id) }
        });

        return {
            message: "Admin deletado com sucesso"
        };
    });

};
