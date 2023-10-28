import { User } from "@prisma/client";
import { randomUUID as uuid } from "node:crypto";

import { ICreateUserRequestProps } from "~/useCases/createUserUseCase";

import { IUserRepository } from "../interfaces/IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }
  
  async create({
    username,
    age,
    country,
    description,
  }: ICreateUserRequestProps): Promise<User> {
    const user: User = {
      id: uuid(),
      username,
      age,
      country,
      description,
    };

    this.users.push(user);

    return user;
  }
  
  async findByUsername(username: string): Promise<User | null> {
    const user = this.users.find((user) => user.username === username);

    if (!user) return null;

    return user;
  }

}

export { UserRepositoryInMemory };
