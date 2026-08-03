import express from 'express'
import { getAllUsers, login, register } from './user.controller.js'

const userRouter = express.Router()

userRouter.post('/auth/register', register)
userRouter.post('/auth/login', login)
userRouter.get('/users', getAllUsers)

export default userRouter