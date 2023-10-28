import { Prisma, User } from "@prisma/client";

interface IUserRepository {
  create(props: Prisma.UserCreateInput): Promise<User>;
  findByUsername(username: string): Promise<User | null>
}

export { IUserRepository };
