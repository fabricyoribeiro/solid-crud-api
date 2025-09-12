import type { Request, Response } from "express";
import type { DeleteUserUseCase } from "./DeleteUserUseCase.js";

export class DeleteUserController {
  constructor(
    private deleteUserUseCase: DeleteUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    try {
      const id = request.params?.id as string
      await this.deleteUserUseCase.execute(id)
      return response.status(200).send()
      
    } catch (error) {
      return response.status(400).json({message: error.message || 'unexpected error'})
      
    }
  }
}