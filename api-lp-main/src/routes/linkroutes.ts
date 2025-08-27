import { FastifyInstance } from "fastify";
import { prismaClient } from "../prisma";
import { z } from "zod";

const linkSchema = z.object({
    link: z.string(),
});

export const linkRoutes = async (app: FastifyInstance) => {

    app.post("/link", async (request, reply) => {
        const data = linkSchema.parse(request.body);

        const result = await prismaClient.videoLink.create({
            data: {
                link: data.link,
            }
        });

        return result;
    });

    app.get("/link", async (request, reply) => {
        const link = await prismaClient.videoLink.findUnique({
            where: {
                id: 1, 
            }
        });

        if (!link) {
            return reply.status(404).send({ message: "Link not found" });
        }

        return link;
    });

    app.put("/link", async (request, reply) => {
        const data = linkSchema.parse(request.body);

        const link = await prismaClient.videoLink.update({
            where: {
                id: 1, 
            },
            data: {
                link: data.link,
            }
        });

        return link;
    });

};
