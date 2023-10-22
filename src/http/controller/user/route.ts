import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function usersRoutes(app: FastifyInstance) {
  
  app.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
    console.log(request.url);
    return reply.code(200).send({ name: "tiago", age: 29 });
  });
  
} 
