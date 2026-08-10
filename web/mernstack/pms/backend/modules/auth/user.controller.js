import bcrypt from "bcrypt"
import User from "./user.model.js"
import { emailReg, generateOtp, sendEmail } from "../../utils/common.js"
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

export const forgotPassword = async (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.send({
            status: false,
            message: "Please provide email"
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
                message: "User not found"
            })
        }


        const OtpCode = generateOtp()
        console.log("OTP CODE IS: ", OtpCode)

        const subject = "OTP CODE for reset password 🔔🔐"
        const htmlBody = `
        Your requested OTP code: <small>${OtpCode}</small>
        <br />
        <strong>Note: Do not share this OTP code to anyone</strong>
        `
        user.otp = OtpCode
        await user.save()

        sendEmail(user.email, subject, htmlBody)
        return res.send({
            status: true,
            message: "OTP code has been sent to your email"
        })

    } catch (error) {
        throw new Error(error)
    }
}

export const resetPassword = async (req, res) => {
    const { email, userOtp, newPassword } = req.body
    if (!email || !newPassword || !userOtp) {
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
    
    if (!userOtp) {
        return res.send({
            status: false,
            message: "Please provide Otp!"
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

        if (user.otp != userOtp) {
            return res.send({
                status: false,
                message: "Given otp is invalid!"
            })
        }

        // hash passwprd
        const salt = await bcrypt.genSaltSync(10)
        const encPass = await bcrypt.hashSync(newPassword, salt)

        user.otp = null
        user.isOtpVerified = true
        user.password = encPass

        user.save()

        return res.send({
            status: true,
            message: "Password has been changed"
        })

        
    } catch (error) {
        throw new Error(error)
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