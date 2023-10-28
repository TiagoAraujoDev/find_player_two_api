import { FastifyInstance } from "fastify";

import { create } from "../createUserController";

export async function usersRoutes(app: FastifyInstance) {
  
  app.post("/users", create);
  
}
