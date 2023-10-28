import { User } from "@prisma/client";

import { IUserRepository } from "~/repositories/interfaces/IUserRepository";

import { UsernameAlreadyRegisterError } from "./error/UsernameAlreadyRegister";

export interface ICreateUserRequestProps {
  username: string;
  description: string;
  country: string;
  age: number;
}

export interface ICreateUserResponseProps {
  user: User;
}

class CreateUserUseCase {
  constructor(private userRepositor: IUserRepository) {}

  async execute({
    username,
    age,
    country,
    description,
  }: ICreateUserRequestProps): Promise<ICreateUserResponseProps> {
    const userAlreadyExist = await this.userRepositor.findByUsername(username);

    if (userAlreadyExist) {
      throw new UsernameAlreadyRegisterError();
    }

    const user = await this.userRepositor.create({
      username,
      age,
      country,
      description,
    });

    return {
      user,
    };
  }
}

export { CreateUserUseCase };
