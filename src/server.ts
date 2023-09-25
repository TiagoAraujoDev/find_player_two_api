import Fastify, { FastifyReply, FastifyRequest } from "fastify";

const fastify = Fastify({
  logger: true
});

fastify.get("/", (_: FastifyRequest, reply: FastifyReply) => {
  return reply.send("Hello, world!");
});

fastify.listen({
  port: 8080,
  host: "0.0.0.0"
}, () => {
  console.log("Server running");
});
