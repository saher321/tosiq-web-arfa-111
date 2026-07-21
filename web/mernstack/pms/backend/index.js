import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js'

const app = express()
const PORT= process.env.PORT || 5000
const PREFIX = "/api/v1/team"

// configuration
dotenv.config()

// middleware
app.use(express.json())
app.use(cors())

// http://localhost:5000/run
app.get('/run', (req, res) => {
    return res.send({
        status: true,
        message: "Server is running..."
    })
})

connectDB().then(() => {
    app.listen(PORT,() => {
        console.log(`Server is started at http://localhost:${PORT}`)
    })
})