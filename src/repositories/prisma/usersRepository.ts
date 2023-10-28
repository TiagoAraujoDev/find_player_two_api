import { Prisma } from "@prisma/client";

import { prisma } from "~/lib/prisma";

import { IUserRepository } from "../interfaces/IUserRepository";

class UsersRepository implements IUserRepository {
  async create({
    username,
    age,
    country,
    description,
  }: Prisma.UserCreateInput): Promise<{
    id: string;
    username: string;
    age: number;
    country: string;
    description: string;
  }> {
    const user = await prisma.user.create({
      data: {
        username,
        age,
        country,
        description,
      },
    });

    return user;
  }

  async findByUsername(
    username: string,
  ): Promise<{
    id: string;
    username: string;
    age: number;
    country: string;
    description: string;
  } | null> {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    return user;
  }
}

export { UsersRepository };
