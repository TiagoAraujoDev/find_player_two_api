import { fastify } from "./app";
import { env } from "./env";

fastify.listen({
  port: env.PORT,
  host: env.HOST
}, (err, address) => {
  if (!err) {
    console.log("🚀 Server running!");
    console.log(`🌐 Access: ${address}`);
  }
});
