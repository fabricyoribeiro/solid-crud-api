import type { User } from "../entities/User.js";

export interface IUsersRepository {
  save(user: User): Promise<void>
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
  getAll(): Promise<User[]>
  delete(id: string): Promise<void>
  update(id: string, data: User): Promise<void>
}