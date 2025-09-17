import { describe, expect, it, vi } from "vitest";
import { UpdateUserUseCase } from "./UpdateUserUseCase.js";

describe('update user', () => {
    it('should be able to update a user', async () => {
        const mockRepository = {
            update: vi.fn(),
            findById: vi.fn().mockResolvedValue({ id: '123', name: 'fabricyo', email: 'fabricyo@gmail.com', password: '123' })
        }

        const updateUserUseCase = new UpdateUserUseCase(mockRepository)

        await updateUserUseCase.execute('123', { name: 'fabricyo updated', email: 'fabricyo@gmail.com', password: '123' })

        await expect(mockRepository.findById('123')).resolves.toEqual({ id: '123', name: 'fabricyo', email: 'fabricyo@gmail.com', password: '123' })
        expect(mockRepository.update).toHaveBeenCalled()
    })

    it('should throw an error and not call update if user does not exist', async () => {
        const mockRepository = {
            update: vi.fn(),
            findById: vi.fn().mockResolvedValue(null)
        }

        const updateUserUseCase = new UpdateUserUseCase(mockRepository)

        await expect(updateUserUseCase.execute('123', { name: 'fabricyo', email: 'fabricyo@gmail.com', password: '123' })).rejects.toThrowError('error while updating user. user does not exists')
        expect(mockRepository.findById).toHaveBeenCalledWith('123')
        expect(mockRepository.update).not.toHaveBeenCalled()
    })
})