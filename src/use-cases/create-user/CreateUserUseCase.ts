import { User } from "../../entities/User.js";
import type { IUsersRepository } from "../../repositories/IUsersRepository.js";
import type { ICreateUserRequestDTO, ICreateUserResponseDTO } from "../../dtos/CreateUserDTO.js";

export class CreateUserUseCase {
  
  constructor (
    private usersRepository: IUsersRepository
  ){}

  async execute(data: ICreateUserRequestDTO): Promise<ICreateUserResponseDTO> {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if(userAlreadyExists){
      throw new Error('user already exists')
    }

    const user = new User(data)

    const result = await this.usersRepository.save(user)
    return result
  }
}