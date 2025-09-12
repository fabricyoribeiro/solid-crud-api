import {response, Router} from 'express'
import { createUserController } from './use-cases/create-user/index.js'
import { getAllUsersController } from './use-cases/get-all/index.js'
import { updateUserController } from './use-cases/update-user/index.js'

const router = Router()

router.post('/user', (request, response) => {
  return createUserController.handle(request, response)
})

router.get('/user', (request, response) => {
  return getAllUsersController.handle(request, response)
})

router.put('/user/:id', (request, response) => {
  return updateUserController.handle(request, response)
})

export {router}