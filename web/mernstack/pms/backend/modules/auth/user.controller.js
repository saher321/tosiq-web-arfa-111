import User from "./user.model.js"

export const getAllUsers = async (req, res) => {

    try {
        const users = await User.find({})
        if (users) {
            return res.send({
                status: true,
                users: users
            })
        } else {
            return res.send({
                status: false,
                message: "Users not found or maybe removed"
            })
        }
    } catch (error) {
        throw new Error(error)
    }

}