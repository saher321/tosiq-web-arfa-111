// express, nodemon, jsonwebtoken, nodemailer, 
// nanoid, mongoose, dotenv, bcryptjs, cors
import express from 'express'
import orderRouter from './routes/orders.route.js'

const app = express()
const PORT = 5000 // 5000, 8000

// http://localhost:5000/order-status
app.use('', orderRouter)

app.get('/', (req, res) => {
    return res.send({
        status: true,
        msg: "Server is running fine."
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is started at http://localhost:${PORT}`)
})