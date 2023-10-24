import { beforeAll, describe, expect, it } from "vitest";

import { UserRepositoryInMemory } from "~/repositories/inMemory/userRepository";
import {
  IUserRepository,
  User,
} from "~/repositories/interfaces/IUserRepository";

import { CreateUserUseCase } from "./createUserUseCase";

let sut: CreateUserUseCase;
let userRepository: IUserRepository;

describe("Create user", () => {
  beforeAll(() => {
    userRepository = new UserRepositoryInMemory();
    sut = new CreateUserUseCase(userRepository);
  });

  it("should be able to create a new user", async () => {
    const userMock: User = {
      name: "Jonh Doe",
      age: 30,
      country: "USA",
      description: "Nice guy to play FIFA!",
    };
    const { user } = await sut.execute(userMock);

    expect(user.name).toEqual(expect.stringMatching("Jonh Doe"));
  });
});
