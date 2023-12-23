const ProductEnquiry = require("../model/ProductEnquiry");

const createProductEnquiry = async (req, res) => {
    try {
        const productEnquiry = new ProductEnquiry({ ...req.body, vendorID: req.vendor._id });
        const response = await productEnquiry.save();
        if (!response) {
            res.status(401).json({ error: true, message: "Something Went Wrong", response: response })
        } else {
            res.status(200).json({ error: false, message: "Enquiry Created Successfully!", response: response })
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}

const getProductEnquiry = async (req, res) => {
    try {
        const response = await ProductEnquiry.find().populate("vendorID");
        if (!response) {
            res.status(401).json({ error: true, message: "Something Went Wrong", response: response })
        } else {
            res.status(200).json({ error: false, message: "All Enquiry Fetched Successfully!", response: response })
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}


module.exports = { getProductEnquiry, createProductEnquiry }