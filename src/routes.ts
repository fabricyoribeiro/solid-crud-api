import {response, Router} from 'express'
import { createUserController } from './use-cases/create-user/index.js'
import { getAllUsersController } from './use-cases/get-all/index.js'

const router = Router()

router.post('/user', (request, response) => {
  return createUserController.handle(request, response)
})

router.get('/user', (request, response) => {
  return getAllUsersController.handle(request, response)
})

export {router}