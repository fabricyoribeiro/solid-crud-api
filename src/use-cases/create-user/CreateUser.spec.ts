import { CreateUserController } from "./CreateUserController.js"
import { describe, expect, it, vi } from 'vitest'
import { CreateUserUseCase } from "./CreateUserUseCase.js"

describe('create user', () => {
    it('should be able to create a new user', async () => {

        const mockRepository = {
            save: vi.fn().mockResolvedValue({ id: '123', name: 'fabricyo', email: 'fabricyo@gmail.com' }),
            findByEmail: vi.fn().mockResolvedValue(null)
        }

        const createUserUseCase = new CreateUserUseCase(mockRepository)

        const result = await createUserUseCase.execute({ name: 'fabricyo', email: 'fabricyo@gmail.com', password: '123' })

        expect(mockRepository.findByEmail).toHaveBeenCalledWith('fabricyo@gmail.com')
        expect(mockRepository.save).toHaveBeenCalled()
        expect(result).toEqual({ id: '123', name: 'fabricyo', email: 'fabricyo@gmail.com' })

    })

    it('should throw an error if user email already exists', async () => {
        const mockRepository = {
            save: vi.fn(),
            findByEmail: vi.fn().mockResolvedValue({ id: '123', name: 'ribeiro', email: 'ribeiro@gmail.com' })
        }

        const createUserUseCase = new CreateUserUseCase(mockRepository)

        await expect(createUserUseCase.execute({ name: 'ribeiro', email: 'ribeiro@gmail.com', password: '123' }))
            .rejects.toThrowError('user already exists')

        expect(mockRepository.save).not.toHaveBeenCalled()
    })


})