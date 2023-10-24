import { IRequestProps } from "~/useCases/createUserUseCase";

import { IUserRepository, User } from "../interfaces/IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async create({ name, age, country, description }: IRequestProps): Promise<User> {
    const user: User = {
      name,
      age,
      country,
      description,
    };

    this.users.push(user);

    return user;
  }
}

export { UserRepositoryInMemory };
