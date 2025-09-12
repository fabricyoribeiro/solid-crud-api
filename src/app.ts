import express, { type Request, type Response } from 'express'
import { routes } from './routes/index.js'

const app = express()

app.use(express.json())
app.use(routes)

app.get("/", (request: Request, response: Response) => {
  return response.status(200).json({message: "API online"})
})

export {app}