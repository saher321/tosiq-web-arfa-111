import express from 'express'
import { getUsers } from './user.controller.js'

const userRouter = express.Router()

userRouter.get('/users', getUsers)

export default userRouter