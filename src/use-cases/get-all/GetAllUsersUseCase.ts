import type { IUsersRepository } from "../../repositories/IUsersRepository.js";

export class GetAllUsersUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ){}

  async execute(): Promise<User[]>{
    const users = await this.usersRepository.getAll()
    return users
  }
}