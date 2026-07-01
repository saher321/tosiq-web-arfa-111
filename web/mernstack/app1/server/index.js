// express, nodemon, mongoose, nanoid, nodemailer, dotenv, cors

// Pixel 7 pro : 11223344
import express from 'express'

const app = express();

// http://localhost:5000/
const colors = [ "White", "Black", "Brown", "Yellow", "Red"]

// http://localhost:5000/colors
app.get('/colors', (req, res) => {
  return res.send({
    status: true,
    colors
  })
})
app.get('/', (req, res) => {
  return res.send({
    status: true,
    message: "Server is running..."
  })
})

app.listen(5000, () => {
  console.log("Server is started http://localhost:"+ 5000 )
})