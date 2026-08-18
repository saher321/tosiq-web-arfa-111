import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js'
import userRouter from './modules/auth/user.routes.js'
import customerRouter from './modules/team/customers/customer.routes.js'

const app = express()
const PORT= process.env.PORT || 5000
const PREFIX = "/api/v1"

// configuration
dotenv.config()

// middleware
app.use(express.json())
app.use(cors())

// http://localhost:5000/api/v1/auth/register
// http://localhost:5000/run
app.get('/run', (req, res) => {
    return res.send({
        status: true,
        message: "Server is running..."
    })
})

// users
app.use(PREFIX, userRouter)

// customers
app.use(PREFIX, customerRouter)


connectDB().then(() => {
    app.listen(PORT,() => {
        console.log(`Server is started at http://localhost:${PORT}`)
    })
})