import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { UsernameAlreadyRegisterError } from "~/useCases/error/UsernameAlreadyRegister";
import { makeCreateUserUseCase } from "~/useCases/factory/makeCreateUserUseCase";

async function create(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    username: z.string(),
    password: z.string(),
    age: z.coerce.number(),
    country: z.string(),
    description: z.string(),
  });

  const { username, password, age, country, description } = bodySchema.parse(
    request.body,
  );

  try {
    const createUserUseCase = makeCreateUserUseCase();
    const user = await createUserUseCase.execute({
      username,
      password,
      age,
      country,
      description,
    });

    return reply.status(201).send(user);
  } catch (error) {
    if (error instanceof UsernameAlreadyRegisterError) {
      return reply.status(400).send({ message: error.message });
    }

    // This will capture any unexpected error
    throw error;
  }
}

export { create };
