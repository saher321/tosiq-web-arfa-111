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