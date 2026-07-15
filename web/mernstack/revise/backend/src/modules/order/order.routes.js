import express from 'express'
import { getStatuses } from './order.controller.js'

const orderRouter = express.Router()

orderRouter.get('/order-statuses', getStatuses)

export default orderRouter