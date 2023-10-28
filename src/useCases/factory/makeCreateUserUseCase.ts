import { UsersRepository } from "~/repositories/prisma/usersRepository";

import { CreateUserUseCase } from "../createUserUseCase";

function makeCreateUserUseCase() {
  const repository = new UsersRepository();
  const createUserUseCase = new CreateUserUseCase(repository);

  return createUserUseCase;
}

export { makeCreateUserUseCase };
