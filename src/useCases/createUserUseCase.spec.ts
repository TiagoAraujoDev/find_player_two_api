import { Prisma } from "@prisma/client";
import { beforeEach, describe, expect, it } from "vitest";

import { UserRepositoryInMemory } from "~/repositories/inMemory/userRepository";
import { IUserRepository } from "~/repositories/interfaces/IUserRepository";

import { CreateUserUseCase } from "./createUserUseCase";
import { UsernameAlreadyRegisterError } from "./error/UsernameAlreadyRegister";

let sut: CreateUserUseCase;
let userRepository: IUserRepository;

describe("Create user", () => {
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
    sut = new CreateUserUseCase(userRepository);
  });

  it("should be able to create a new user", async () => {
    const userMock: Prisma.UserCreateInput = {
      username: "Jonh_Doe",
      age: 30,
      country: "USA",
      description: "Nice guy to play FIFA!",
    };
    const { user } = await sut.execute(userMock);

    expect(user.username).toEqual(expect.stringMatching("Jonh_Doe"));
  });

  it("should not be able to create a new user with an existing username", async () => {
    const user_1: Prisma.UserCreateInput = {
      username: "Jonh_Doe",
      age: 30,
      country: "USA",
      description: "Nice guy to play FIFA!",
    };

    const user_2: Prisma.UserCreateInput = {
      username: "Jonh_Doe",
      age: 20,
      country: "Brasil",
      description: "Other guy that rages",
    };

    await sut.execute(user_1);

    await expect(() => sut.execute(user_2)).rejects.toBeInstanceOf(
      UsernameAlreadyRegisterError,
    );
  });
});
