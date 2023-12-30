const Gallery = require("../model/Gallery");


const createGallery = async (req, res) => {
    try {
        const gallery = new Gallery(req.body);
        const response = await gallery.save();
        if (!response) {
            res.status(401).json({ error: true, message: "Something Went Wrong", response: response })
        } else {
            res.status(200).json({ error: false, message: "Gallery Created Successfully!", response: response })
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}


const getGallery = async (req, res) => {
    try {
        const response = await Gallery.find();
        if (!response) {
            res.status(401).json({ error: true, message: "Something Went Wrong", response: response })
        } else {
            res.status(200).json({ error: false, message: "All Data Fetched Successfully!", response: response })
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}

const deleteGallery = async (req, res) => {
    try {
        const response = await Gallery.findByIdAndDelete({ _id: req.params._id });
        if (!response) {
            res.status(500).json({
                error: true,
                message: "Something Went Wrong",
                product: response,
            });
        } else {
            res.json({
                error: false,
                message: "Gallery Deletd Successful!",
                product: response,
            });
        }
    } catch (error) {
        res.status(500).json({
            error: true,
            message: "Something Went Wrong",
            product: error,
        });
    }
}
module.exports = { createGallery, getGallery, deleteGallery }