import type { Request, Response } from "express";
import type { UpdateUserUseCase } from "./UpdateUserUseCase.js";
import z from "zod";

export class UpdateUserController {
  constructor(
    private updateUserUseCase: UpdateUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    try {
      const reqBody = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string()
      })

      const id = request.params?.id as string

      const data = reqBody.parse(request.body)

      await this.updateUserUseCase.execute(id, data)

      return response.status(200).json({message: 'user updated'})

    } catch (error) {
      if(error instanceof z.ZodError){
        return response.status(400).json({error: 'invalid fields'})
      }
      return response.status(400).json({message: error.message || 'unexpected error'})
    }
  }
}