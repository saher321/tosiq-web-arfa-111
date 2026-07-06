
export const getAllStatus = (req, res) => {

    const orderStatus = [
        "Active", 
        "Pending", 
        "Completed", 
        "On the way", 
        "Dispatched",
        "Cancelled",
    ]

    return res.send({
        status: true,
        orderStatus
    })
}