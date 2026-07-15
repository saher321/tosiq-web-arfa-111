
// BACKEND PKGS
// cors
// express
// nodemon

// FRONTEND PKGS
// axios

import express from 'express'
import orderRouter from './src/modules/order/order.routes.js'
import cors from "cors"

const app = express()
const PORT = 5000
const PREFIX = '/api/v1'

app.use(cors())

app.use(PREFIX, orderRouter)

app.get("/health", (req, res) => {
    return res.send({
        status: true,
        msg: "Good"
    })
})

app.listen(PORT, () => {
    console.log(`Server is started at http://localhost:${PORT}`)
})
