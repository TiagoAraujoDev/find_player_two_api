import { IUserRepository, User } from "~/repositories/interfaces/IUserRepository";

export interface ICreateUserRequestProps {
  name: string;
  description: string;
  country: string;
  age: number;
}

export interface ICreateUserResponseProps {
  user: User; 
}

class CreateUserUseCase {
  constructor(private userRepositor: IUserRepository) {}

  async execute({ name, age, country, description }: ICreateUserRequestProps): Promise<ICreateUserResponseProps> {
    const user = await this.userRepositor.create({
      name,
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
