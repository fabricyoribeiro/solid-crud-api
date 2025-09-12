import type { User } from "../../entities/User.js";
import { prisma } from "../../database/prisma.js";
import type { IUsersRepository } from "../IUsersRepository.js";

export class PostgresUserRepository implements IUsersRepository {


  async save(user: User): Promise<void> {
    try {
      await prisma.user.create({ data: user })
    } catch (error) {
      console.error('error while saving user', error)
      throw new Error("database error")
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findFirst({ where: { email } })
  }

}