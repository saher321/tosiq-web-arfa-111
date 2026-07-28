import express from 'express'
import { getAllUsers, register } from './user.controller.js'

const userRouter = express.Router()

userRouter.post('/auth/register', register)
userRouter.get('/users', getAllUsers)

export default userRouter