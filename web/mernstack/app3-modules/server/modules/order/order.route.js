import express from 'express'
import { getAllStatus } from './order.controller.js'

const orderRouter = express.Router()

// http://localhost:5000/api/v1/order-status
orderRouter.get('/order-status', getAllStatus)

export default orderRouter

// import orderRouter from 'path'
// import { getAllStatus } from 'path'