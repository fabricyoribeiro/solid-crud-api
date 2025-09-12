import { PostgresUserRepository } from "../../repositories/implementations/PostgresUsersRepository.js";
import { DeleteUserController } from "./DeleteUserController.js";
import { DeleteUserUseCase } from "./DeleteUserUseCase.js";

const postgresUserRepository = new PostgresUserRepository()

const deleteUserUseCase = new DeleteUserUseCase(postgresUserRepository)

const deleteUserController = new DeleteUserController(deleteUserUseCase)

export {deleteUserUseCase, deleteUserController}