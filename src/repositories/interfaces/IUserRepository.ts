import { Prisma, User } from "@prisma/client";

interface IUserRepository {
  create(props: Prisma.UserCreateInput): Promise<User>;
}

export { IUserRepository };
