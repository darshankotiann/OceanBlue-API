const BookService = require("../model/BookServiceForm")

const createService = async (req, res) => {
    try {
        const bookService = new BookService({ ...req.body, vendorID: req.vendor._id });
        const response = await bookService.save();
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
        const response = await BookService.find().populate("vendorID");
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