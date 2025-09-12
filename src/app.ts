import express, { type Request, type Response } from 'express'
import { router } from './routes.js'

const app = express()

app.use(express.json())
app.use(router)

app.get("/hello", (request: Request, response: Response) => {
  return response.status(200).json({message: "API online"})
})

export {app}