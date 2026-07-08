import express from "express";
import dotenv from 'dotenv'
import cors from "cors"
import userRouter from "./modules/user/user.routes.js";


dotenv.config()
// default
const PORT    = process.env.PORT || 5000
const app     = express()
const PREFIX  = '/api/v1'

// middleware
app.use(cors())

// routes
app.use(PREFIX, userRouter)

// test
app.get('/', (req, res) => {
  return res.send({
    status: true,
    msg: "Server is running fine..."
  })
})

app.listen(PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`)
})