import User from "./user.model.js"


export const register = async (req, res) => {
    const { fullName, email, password, role } = req.body
    
    if (!fullName || !email || !password || !role) {
        return res.send({
            status: false,
            message: "Fill all the fields"
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
        
        const user = { fullName, email, password, role }
        const response = await User.save(user)

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