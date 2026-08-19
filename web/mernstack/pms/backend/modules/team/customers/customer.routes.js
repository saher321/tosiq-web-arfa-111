import express from 'express'
import { customers, addCustomer, deleteCustomer } from './customer.controller.js'


const customerRouter = express.Router()

// http://localhost:5000/api/v1/customers
customerRouter.get('/customers/', customers)
customerRouter.post('/customers/add', addCustomer)
customerRouter.delete('/customers/:id/delete', deleteCustomer)

export default customerRouter