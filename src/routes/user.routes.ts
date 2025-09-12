import { Router} from 'express'
import { createUserController } from '../use-cases/create-user/index.js'
import { getAllUsersController } from '../use-cases/get-all/index.js'
import { updateUserController } from '../use-cases/update-user/index.js'
import { deleteUserController } from '../use-cases/delete-user/index.js'


const userRoutes = Router()

userRoutes.post('/', (request, response) => {
  return createUserController.handle(request, response)
})

userRoutes.get('/', (request, response) => {
  return getAllUsersController.handle(request, response)
})

userRoutes.put('/:id', (request, response) => {
  return updateUserController.handle(request, response)
})

userRoutes.delete('/:id', (request, response) => {
  return deleteUserController.handle(request, response)
})

export {userRoutes}