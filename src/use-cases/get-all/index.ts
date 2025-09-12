import { PostgresUserRepository } from "../../repositories/implementations/PostgresUsersRepository.js";
import { GetAllUsersController } from "./GetAllUsersController.js";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase.js";

const postgresUserRepository = new PostgresUserRepository()

const getAllUsersUseCase = new GetAllUsersUseCase(postgresUserRepository)

const getAllUsersController = new GetAllUsersController(getAllUsersUseCase)

export {getAllUsersController, getAllUsersUseCase}