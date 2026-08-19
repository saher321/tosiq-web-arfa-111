import { emailReg } from "../../../utils/common.js"
import Customer from "./customer.model.js"

export const customers = async (req, res) => {
    try {
        const allCustomers = await Customer.find({})

        return res.send({
            status: true,
            customers: allCustomers
        })

    } catch (error) {
        throw new Error(error)
    }
}

export const addCustomer = async (req, res) => {
    const { fullName, email, contact, projectStatus, address } = req.body

    if (!fullName || !email || !contact || !projectStatus) {
            return res.send({
                status: false,
                message: "Fill all the fields"
            })
        }
    
    if (!emailReg.test(email)) {
        return res.send({
            status: false,
            message: "Email format is invalid"
        })
    }

    try {
        const exist = await Customer.findOne({email})
        if (exist) {
            return res.send({
                status: false,
                message: "Customer already exist with this email"
            })
        }

        const customer = { 
            fullName, 
            email, 
            contact, 
            projectStatus,
            address : address || ''
        }

        const response = await Customer.create(customer)
        if (response) {
            return res.send({
                status: true,
                message: "Customer has been added"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to add customer"
            })
        }

    } catch (error) {
        throw new Error(error)
    }
}

export const deleteCustomer = async (req, res) => {
    const { id } = req.params
    if (!id){
        return res.send({
            status: false,
            message: "ID not found!"
        })
    }
    try {
        const customer = await Customer.findByIdAndDelete({_id: id})
        if (!customer) {
            return res.send({
                status: false,
                message: "Customer not found"
            })
        }

        return res.send({
            status: true, 
            message: "Customer has been deleted!"
        })

    } catch (error) {
        throw new Error(error)
    }
}