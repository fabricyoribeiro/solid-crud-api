import type { Request, Response } from "express";
import type { CreateUserUseCase } from "./CreateUserUseCase.js";
import z from "zod";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {

      const reqBody = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string()
      })

      const { name, email, password } = reqBody.parse(request.body)
      await this.createUserUseCase.execute({ name, email, password })
      return response.status(201).send()

    } catch (error) {
      if (error instanceof z.ZodError) {
        return response.status(400).json({
          error: 'invalid fields'
        })
      }

      return response.status(400).json({
        message: error.message || 'unexpected error'
      })

    }
  }

}