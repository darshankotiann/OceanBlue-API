const Vendor = require("../model/vendor")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const saltRounds = 10



const handleSignup = async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
        const vendor = new Vendor({
            ...req.body, password: hashPassword
        });
        const response = await vendor.save();
        if (response) {
            res.json({ error: false, message: "Accounted Created Successfully", response: response })

        } else {
            res.status(500).json({ error: true, message: "Something Went Wrong", response: response })
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}

const handleSignin = async (req, res) => {
    try {
        const vendor = await Vendor.findOne({ email: req.body.email });
        if (!vendor) {
            res.status(500).json({ error: true, message: "User Doesn't exsit", response: vendor })
        } else {
            try {
                if (await bcrypt.compare(req.body.password, vendor.password)) {
                    const token = jwt.sign({ role: vendor.role, _id: vendor._id }, process.env.SECRET_KEY)
                    res.json({ error: false, message: "You have Signin Successfully", response: token })
                } else {
                    res.status(500).json({ error: true, message: "Token Problem" })
                }
            } catch (error) {
                res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
            }
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Something Went Wrong", response: error })
    }
}

const updateProfile = async (req, res) => {
    try {
        const updatedProfile = await Vendor.findByIdAndUpdate(req.vendor._id, req.body, {
            returnOriginal: false
        });
        if (!updatedProfile) {
            res.status(500).json({
                error: true,
                message: "Something Went Wrong",
                response: updatedProfile,
            });
        } else {
            res.json({
                error: false,
                message: "Profile Updated Successful!",
                response: updatedProfile,
            });
        }
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message,
        });
    }

}

const getAllVendor = async (req, res) => {
    try {
        const vendor = await Vendor.find();
        if (!vendor) {
            res.status(500).json({
                error: true, message: "Something Went Wrong", response: vendor,
            });
        } else {
            res.json({
                error: false, message: "All vendors are Fetched Successful!", response: vendor,
            });
        }
    } catch (error) {
        res.status(500).json({
            error: true, message: "Something Went Wrong", response: error,
        });
    }
}


const getVendor = async (req, res) => {

    try {
        const vendor = await Vendor.findOne({ _id: req.vendor._id })
        if (!vendor) {
            res.status(500).json({
                error: true,
                message: "Something Went Wrong",
                response: vendor,
            });
        } else {
            res.json({
                error: false,
                message: "vendor Fetched Successful!",
                response: vendor,
            });
        }
    } catch (error) {
        res.status(500).json({
            error: true,
            message: "Something Went Wrong",
            response: error,
        });
    }
}


module.exports = { handleSignin, handleSignup, updateProfile, getAllVendor, getVendor }