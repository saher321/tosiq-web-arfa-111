import express from 'express'
import { getAllStatus } from '../controllers/orders.controller.js'

const orderRouter = express.Router()

orderRouter.get('/order-status', getAllStatus)

export default orderRouter