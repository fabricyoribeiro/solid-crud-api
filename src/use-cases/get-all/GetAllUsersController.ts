import type { Request, Response } from "express";
import type { IUsersRepository } from "../../repositories/IUsersRepository.js";
import { prisma } from "../../database/prisma.js";
import type { GetAllUsersUseCase } from "./GetAllUsersUseCase.js";

export class GetAllUsersController {
  constructor(
    private getAllUsersUseCase: GetAllUsersUseCase
  ){}

  async handle(request: Request, response: Response): Promise<User[]>{
    try {
      const users = await this.getAllUsersUseCase.execute()
      return response.status(200).json(users)
    } catch (error) {
      return response.status(400).json({error: error.message})
    }
  }

}