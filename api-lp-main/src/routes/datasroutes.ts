import { FastifyInstance } from "fastify";
import { prismaClient } from "../prisma";
import { z } from "zod";

const dataSchema = z.object({
    day: z.string(),
    month: z.string(),
    location: z.string(),
    city: z.string(),
    linkbuy: z.string().optional(),
});

export const datasRoutes = async (app: FastifyInstance) => {

    app.post("/data", async (request, reply) => { 
        const data = dataSchema.parse(request.body);

        const result = await prismaClient.datas.create({
            data: {
                day: data.day,
                month: data.month,
                location: data.location,
                city: data.city,
                linkbuy: data.linkbuy
            }
        });

        return result;
    });

    app.get("/data", async (request, reply) => {
        const results = await prismaClient.datas.findMany();
        return results;
    });

    app.get("/data/:id", async (request, reply) => {
        const { id } = request.params as { id: string };

        const data = await prismaClient.datas.findUnique({
            where: {
                id: parseInt(id),
            }
        });

        if (!data) {
            return reply.status(404).send({ message: "Data not found" });
        }

        return data;
    });

    app.delete("/data/:id", async (request, reply) => {
        const { id } = request.params as { id: string };

        const data = await prismaClient.datas.delete({
            where: {
                id: parseInt(id),
            }
        });

        return data;
    });

    app.put("/data/:id", async (request, reply) => {
        const { id } = request.params as { id: string };
        const updatedData = dataSchema.parse(request.body);

        const existingData = await prismaClient.datas.findUnique({
            where: {
                id: parseInt(id),
            }
        });

        if (!existingData) {
            return reply.status(404).send({ message: "Data not found" });
        }

        const result = await prismaClient.datas.update({
            where: {
                id: parseInt(id),
            },
            data: {
                day: updatedData.day,
                month: updatedData.month,
                location: updatedData.location,
                city: updatedData.city,
                linkbuy: updatedData.linkbuy
            }
        });

        return result;
    });

};
