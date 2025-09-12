import type { IUsersRepository } from "../../repositories/IUsersRepository.js";

export class DeleteUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) { }

  async execute(id: string) {
    if (!id) {
      throw new Error('invalid id')
    }

    const userExists = await this.usersRepository.findById(id)

    if (!userExists) {
      throw new Error('user does not exists')
    }

    await this.usersRepository.delete(id)
  }
}