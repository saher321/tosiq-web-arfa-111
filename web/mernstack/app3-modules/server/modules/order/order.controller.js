const statuses = [
    "Active",
    "Inactive",
    "Pending",
    "Processing",
    "Cancelled",
    "Dispatched",
    "Delivered",
]
export const getAllStatus = (req, res) => {
    return res.send({
        status: true,
        statuses
    })
}