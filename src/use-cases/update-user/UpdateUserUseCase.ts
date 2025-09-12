import type { IUpdateUserRequestDTO } from "../../dtos/UpdateUserDTO.js";
import type { IUsersRepository } from "../../repositories/IUsersRepository.js";

export class UpdateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) { }

  async execute(id: string, data: IUpdateUserRequestDTO) {
    if (!id) {
      throw new Error("error while updating user. invalid id")
    }
    
    const userExists = await this.usersRepository.findById(id)

    if (!userExists) {
      throw new Error("error while updating user. user does not exists")
    }

    await this.usersRepository.update(id, data)
  }
}