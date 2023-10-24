import { ICreateUserRequestProps } from "~/useCases/createUserUseCase";

type User = {
  name: string;
  age: number;
  country: string;
  description: string;
};

interface IUserRepository {
  create(props: ICreateUserRequestProps): Promise<User>;
}

export { IUserRepository, User };
