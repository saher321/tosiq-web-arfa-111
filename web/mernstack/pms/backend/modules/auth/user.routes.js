import express from 'express'
import { getAllUsers } from './user.controller.js'

const userRouter = express.Router()

userRouter.get('/users', getAllUsers)

export default userRouter