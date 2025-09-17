import { describe, expect, it, vi } from "vitest";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase.js";

describe('get all users', () => {
    it('should return all users', async () => {
        const mockUsers = [
            { id: '123', name: 'fabricyo', email: 'fabricyo@gmail.com', password: '123' },
            { id: '456', name: 'ribeiro', email: 'ribeiro@gmail.com', password: '123' },
            { id: '789', name: 'silva', email: 'silva@gmail.com', password: '123' },
        ]

        const mockRepository = {
            getAll: vi.fn().mockResolvedValue(mockUsers)
        }

        const getAllUsersUseCase = new GetAllUsersUseCase(mockRepository)
        const users = await getAllUsersUseCase.execute()

        expect(users).toEqual(mockUsers)
    })

    it('should retun an empty array if no users exist', async () => {
        const mockRepository = {
            getAll: vi.fn().mockResolvedValue([])
        }

        const getAllUsersUseCase = new GetAllUsersUseCase(mockRepository)
        const users = await getAllUsersUseCase.execute()

        expect(users).toEqual([])
        expect(mockRepository.getAll).toHaveBeenCalled()
    })
})