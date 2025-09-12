import { PostgresUserRepository } from "../../repositories/implementations/PostgresUsersRepository.js";
import { UpdateUserController } from "./UpdateUserController.js";
import { UpdateUserUseCase } from "./UpdateUserUseCase.js";

const postgresUserRepository = new PostgresUserRepository()

const updateUserUseCase = new UpdateUserUseCase(postgresUserRepository)

const updateUserController = new UpdateUserController(updateUserUseCase)

export {updateUserUseCase, updateUserController}