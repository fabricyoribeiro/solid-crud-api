import { describe, expect, it, vi } from "vitest";
import { DeleteUserUseCase } from "./DeleteUserUseCase.js";

describe('delete a user', () => {
    it('should delete a user', async () => {
        const mockRepository = {
            delete: vi.fn(),
            findById: vi.fn().mockResolvedValue({ id: '123', name: 'fabricyo', email: 'fabricyo@gmail.com', password: '123' })
        }

        const deleteUserUseCase = new DeleteUserUseCase(mockRepository)
        await deleteUserUseCase.execute('123')

        expect(mockRepository.findById('123')).resolves.toEqual({ id: '123', name: 'fabricyo', email: 'fabricyo@gmail.com', password: '123' })
        expect(mockRepository.delete).toHaveBeenCalled()
    })

    it('should throw an error and not call delete if user does not exist', async () => {
        const mockRepository = {
            delete: vi.fn(),
            findById: vi.fn().mockResolvedValue(null)
        }
        const deleteUserUseCase = new DeleteUserUseCase(mockRepository)

        await expect(deleteUserUseCase.execute('123')).rejects.toThrowError('user does not exists')
        expect(mockRepository.delete).not.toHaveBeenCalled()
    })
})