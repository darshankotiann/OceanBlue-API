const Orders = require("../model/Orders");
const ProductEnquiry = require("../model/ProductEnquiry")

//Assign Order, Show Orders
const assignOrders = async (req, res) => {
    try {
        const order = new Orders(req.body)
        const response = await order.save();
        if (!response) {
            res.status(401).json({ error: true, message: "Something Went Wrong", response: response })
        } else {
            await ProductEnquiry.findByIdAndUpdate(req.body.enquiryID, { completed: "true" })
            res.status(200).json({ error: false, message: "Order Assigned Successfully!", response: response })
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}

const showOrders = async (req, res) => {
    try {
        const response = await Orders.find({ vendorID: req.vendor._id });
        if (!response) {
            res.status(401).json({ error: true, message: "Something Went Wrong", response: response })
        } else {
            res.status(200).json({ error: false, message: "Order Assigned Successfully!", response: response })
        }

    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })

    }
}
module.exports = { assignOrders, showOrders }