import type { User } from "../../entities/User.js";
import { prisma } from "../../database/prisma.js";
import type { IUsersRepository } from "../IUsersRepository.js";
import type { ICreateUserRequestDTO } from "../../dtos/CreateUserDTO.js";
import type { IUpdateUserRequestDTO } from "../../dtos/UpdateUserDTO.js";

export class PostgresUserRepository implements IUsersRepository {


  async save(user: ICreateUserRequestDTO): Promise<void> {
    try {
      await prisma.user.create({ data: user })
    } catch (error) {
      console.error('error while saving user', error)
      throw new Error("database error: ", error)
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findFirst({ where: { email } })
  }

  async findById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { id } })
  }

  async getAll(): Promise<User[]> {
    try {
      const users = prisma.user.findMany()
      return users
    } catch (error) {
      throw new Error("error while getting users: ", error)
    }
  }

  async update(id: string, data: IUpdateUserRequestDTO){
    try {
      await prisma.user.update({
        where: { id },
        data
      })
    } catch (error) {
      throw new Error(`error while updating user: ${error.message}`)
    }
  }

}