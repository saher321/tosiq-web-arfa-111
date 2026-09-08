import User from '../../auth/user.model.js'

export const getAllEmployees  = async (req, res) => {
    try {
        
        const employees = await User.find({role: "emp"})
        return res.send({ status: true, employees})

    } catch (error) {
        throw new Error(error)
    }
}