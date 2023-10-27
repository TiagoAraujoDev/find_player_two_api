import { Prisma, User } from "@prisma/client";

interface IUserRepository {
  create(props: Prisma.UserCreateInput): Promise<User>;
  // findUserByUsername(username: string): Promise<User>
}

export { IUserRepository };
