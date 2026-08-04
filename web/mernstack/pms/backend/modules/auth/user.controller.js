import bcrypt from "bcrypt"
import User from "./user.model.js"
import { emailReg } from "../../utils/common.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
// emailgmailcom x
export const register = async (req, res) => {
    const { fullName, email, password, role } = req.body

    if (!fullName || !email || !password || !role) {
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
        const userExist = await User.findOne({email})

        if (userExist) {
            return res.send({
                status: false,
                message: "User already exist with this email"
            })
        }
        
        // hash passwprd
        const salt = await bcrypt.genSaltSync(10)
        const encPass = await bcrypt.hashSync(password, salt)
        
        const user = { 
            fullName, 
            email, 
            password: encPass, 
            role 
        }

        const response = await User.create(user)

        if (response) {
            return res.send({
                status: true,
                message: "Account has been created"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to create account"
            })
        }

    } catch (error) {
        throw new Error(error)
        return res.send({
            status: false,
            message: "Server error"
        })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
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
        const user = await User.findOne({email})

        if (!user) {
            return res.send({
                status: false,
                message: "User not found!"
            })
        }

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.send({
                status: false,
                message: "Password is incorrect"
            })
        }

        const loggedinUser = {uID: user._id, role: user.role, email: user.email, fName: user.fullName}

        const token = jwt.sign(loggedinUser, process.env.JWT_SECRET, {expiresIn : '7d'})
        return res.send({
            status: true,
            message: "User loggedin successful!",
            loggedinUser,
            token
        })

    } catch (error) {
        throw new Error(error)
        return res.send({
            status: false,
            message: "Server error"
        })
    }

}

export const getAllUsers = async (req, res) => {

    try {
        const users = await User.find({})
        return res.send({
            status: true,
            users
        })
    } catch (error) {
        throw new Error(error)
    }

}