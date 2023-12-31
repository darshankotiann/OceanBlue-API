const ScrapRequest = require("../model/ScrapRequest")

const createService = async (req, res) => {
    try {
        const scarpRequest = new ScrapRequest({ ...req.body, vendorID: req.vendor._id });
        const response = await scarpRequest.save();
        if (!response) {
            res.status(401).json({ error: true, message: "Something Went Wrong", response: response })
        } else {
            res.status(200).json({ error: false, message: "Enquiry Created Successfully!", response: response })
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}


const getServiceData = async (req, res) => {
    try {
        const response = await ScrapRequest.find().populate("vendorID").populate("orderID").populate({ path: "orderID", populate: { path: "productID", model: "PRODUCTS" } });;
        if (!response) {
            res.status(401).json({ error: true, message: "Something Went Wrong", response: response })
        } else {
            res.status(200).json({ error: false, message: "All Enquiry Fetched Successfully!", response: response })
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}
const updateServiceStatus = async (req, res) => {
    try {
        const response = await ScrapRequest.findByIdAndUpdate({ _id: req.params._id }, { completed: true });
        if (!response) {
            res.status(401).json({ error: true, message: "Something Went Wrong", response: response })
        } else {
            res.status(200).json({ error: false, message: "Updated Succesffully!", response: response })
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}

module.exports = { getServiceData, createService ,updateServiceStatus}