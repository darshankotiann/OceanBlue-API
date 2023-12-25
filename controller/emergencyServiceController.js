const EmergencyService = require("../model/EmergencyForm")

const createService = async (req, res) => {
    try {
        const emergencyService = new EmergencyService({ ...req.body, vendorID: req.vendor._id });
        const response = await emergencyService.save();
        if (!response) {
            res.status(401).json({ error: true, message: "Something Went Wrong", response: response })
        } else {
            res.status(200).json({ error: false, message: "Emergency Enquiry Created Successfully!", response: response })
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}


const getServiceData = async (req, res) => {
    try {
        const response = await EmergencyService.find().populate("vendorID").populate("orderID").populate({ path: "orderID", populate: { path: "productID", model: "PRODUCTS" } });
        if (!response) {
            res.status(401).json({ error: true, message: "Something Went Wrong", response: response })
        } else {
            res.status(200).json({ error: false, message: "All Enquiry Fetched Successfully!", response: response })
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}

module.exports={getServiceData,createService}