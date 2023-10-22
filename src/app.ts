import Fastify from "fastify";

import { usersRoutes } from "./http/controller/user/route";

export const fastify = Fastify({
  logger: true
});

fastify.register(usersRoutes);
