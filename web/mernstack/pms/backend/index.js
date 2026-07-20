import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
const PORT= process.env.PORT || 5000
const PREFIX = "/api/v1/team"

// configuration
dotenv.config()

// middleware
app.use(express.json())
app.use(cors())

app.get('/run', (req, res) => {
    return res.send({
        status: true,
        message: "Server is running..."
    })
})

app.listen(PORT,() => {
    `Server is started at http://localhost:${PORT}`
})