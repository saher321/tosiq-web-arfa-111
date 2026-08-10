import express from 'express'
import { forgotPassword, getAllUsers, login, register, resetPassword } from './user.controller.js'

const userRouter = express.Router()

userRouter.post('/auth/register', register)
userRouter.post('/auth/login', login)
userRouter.post('/auth/forgot-password', forgotPassword)
userRouter.post('/auth/reset-password', resetPassword)
userRouter.get('/users', getAllUsers)

export default userRouter