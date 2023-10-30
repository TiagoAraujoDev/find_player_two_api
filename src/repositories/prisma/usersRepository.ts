import { Prisma } from "@prisma/client";

import { prisma } from "~/lib/prisma";

import { IUserRepository } from "../interfaces/IUserRepository";

class UsersRepository implements IUserRepository {
  async create({
    username,
    password,
    age,
    country,
    description,
    plataforms,
    games,
  }: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data: {
        username,
        password,
        age,
        country,
        description,
        plataforms: plataforms ? plataforms : [],
        games: games ? games : [],
      },
    });

    return user;
  }

  async findByUsername(username: string) {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    return user;
  }
}

export { UsersRepository };
