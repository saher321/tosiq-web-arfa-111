import { users } from "../../utils/common.js"

export const getUsers = (req, res) => {
  return res.send({
    status: true,
    users
  })
}