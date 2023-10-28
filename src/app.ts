import Fastify from "fastify";
import { ZodError } from "zod";

import { env } from "./env";
import { usersRoutes } from "./http/controller/user/route";

export const fastify = Fastify({
  logger: true,
});

fastify.register(usersRoutes);

fastify.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error!", error: error.format() });
  }

  if (env.NODE_ENV !== "prod") {
    console.log("Error: ", error);
  } else {
    // TODO:
    // Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({
    message: "Internal server error!",
    code: error.code,
    name: error.name,
    error: error.message,
  });
});
