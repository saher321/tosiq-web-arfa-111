import { orderStatuses } from "../../utils/common.js"

export const getStatuses = (req, res) => {
    return res.send({
        status: true,
        orderStatuses
    })
}