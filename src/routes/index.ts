import express from "express"
import { userRoutes } from "./user.routes.js"

const routes = express()

routes.use('/user', userRoutes)

export {routes}