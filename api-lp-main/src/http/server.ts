import fastify from "fastify";  
import { datasRoutes } from "../routes/datasroutes";
import { linkRoutes } from "../routes/linkroutes";
import { adminRoutes } from "../routes/adminroutes";
// import { profileRoutes } from "../routes/profileroutes";

const app = fastify({
    logger: true
});

// Registrar plugin CORS
app.register(require('@fastify/cors'), {
    origin: ['http://localhost:3001', 'http://127.0.0.1:3001'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}); // Restart trigger - Force restart after port cleanup

// Registro das rotas
app.register(datasRoutes, {
    prefix: "/api",
});

app.register(linkRoutes, {
    prefix: "/api",
});

app.register(adminRoutes, {
    prefix: "/api",
});

// Rota de health check
app.get('/health', async (request, reply) => {
    return { status: 'ok', timestamp: new Date().toISOString() };
});

// Iniciar o servidor
const start = async () => {
    try {
        const port = process.env.PORT ? Number(process.env.PORT) : 3000;
        await app.listen({
            host: '0.0.0.0',
            port: port
        });
        console.log(`🚀 Server ready at http://localhost:${port}`);
        console.log(`📊 Health check available at http://localhost:${port}/health`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();