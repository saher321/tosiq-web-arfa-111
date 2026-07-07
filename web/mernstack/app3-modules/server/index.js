import express from 'express'
import orderRouter from './modules/order/order.route.js'
import cors from 'cors'
const app = express()
const PORT= 5000
const PREFIX = '/api/v1'

app.use(PREFIX, orderRouter)

// middleware
app.use(cors())
// app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is started at http://localhost:${PORT}`)
})