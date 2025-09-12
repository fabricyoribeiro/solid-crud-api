import {response, Router} from 'express'
import { createUserController } from './use-cases/create-user/index.js'

const router = Router()

router.post('/user', (request, response) => {
  return createUserController.handle(request, response)
})

export {router}