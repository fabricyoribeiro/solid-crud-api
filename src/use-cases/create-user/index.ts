import { PostgresUserRepository } from "../../repositories/implementations/PostgresUsersRepository.js";
import { CreateUserController } from "./CreateUserController.js";
import { CreateUserUseCase } from "./CreateUserUseCase.js";

const postgresUsersReporitory = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(postgresUsersReporitory)

const createUserController = new CreateUserController(createUserUseCase)

export {createUserUseCase, createUserController}