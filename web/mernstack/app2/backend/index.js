// express, nodemon, jsonwebtoken, nodemailer, 
// nanoid, mongoose, dotenv, bcryptjs, cors
import express from 'express'

const app = express()
const PORT = 5000 // 5000, 8000

const orderStatus = [
    "Active", 
    "Pending", 
    "Completed", 
    "On the way", 
    "Dispatched",
    "Cancelled",
]

// http://localhost:5000/order-status
app.get('/order-status', (req, res) => {
    return res.send({
        status: true,
        orderStatus
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is started at http://localhost:${PORT}`)
})