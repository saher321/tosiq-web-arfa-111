import express from 'express'
import { customers, addCustomer } from './customer.controller.js'


const customerRouter = express.Router()

// http://localhost:5000/api/v1/customers
customerRouter.get('/customers/', customers)
customerRouter.post('/customers/add', addCustomer)

export default customerRouter