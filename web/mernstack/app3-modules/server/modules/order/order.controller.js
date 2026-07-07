const statuses = [
    "Active",
    "Inactive",
    "Pending",
    "Processing",
    "Completed",
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