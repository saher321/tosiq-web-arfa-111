import User from "./user.model.js"

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