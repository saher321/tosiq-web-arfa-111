import express from 'express'
import { getAllEmployees } from './employee.controller.js'

const employeesRouter = express.Router()

employeesRouter.get('/employees', getAllEmployees)

export default employeesRouter