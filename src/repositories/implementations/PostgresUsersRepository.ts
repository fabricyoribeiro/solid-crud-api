import type { User } from "../../entities/User.js";
import { prisma } from "../../database/prisma.js";
import type { IUsersRepository } from "../IUsersRepository.js";
import type { ICreateUserRequestDTO, ICreateUserResponseDTO } from "../../dtos/CreateUserDTO.js";
import type { IUpdateUserRequestDTO } from "../../dtos/UpdateUserDTO.js";

export class PostgresUserRepository implements IUsersRepository {

  async save(user: ICreateUserRequestDTO): Promise<ICreateUserResponseDTO> {
    try {
      const createdUser = await prisma.user.create({
        data: user,
        select: {
          id: true,
          name: true,
          email: true,
          password: true
        }
      })
      return createdUser
    } catch (error) {
      throw new Error(`error while saving user: ${error.message}`);
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
      throw new Error(`error while getting users: ${error.message}`)
    }
  }

  async update(id: string, data: IUpdateUserRequestDTO) {
    try {
      await prisma.user.update({
        where: { id },
        data
      })
    } catch (error) {
      throw new Error(`error while updating user: ${error.message}`)
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await prisma.user.delete({ where: { id } })
    } catch (error) {
      throw new Error(`error while deleting user: ${error.message}`)
    }
  }

}