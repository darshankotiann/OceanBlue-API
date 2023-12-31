const { default: mongoose, Schema } = require("mongoose");

const VENDOR_SCHEMA = new Schema({
    image: {
        type: String,
    },
    fullname: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        require: true,
        default: "vendor"
    },
    isVerified: {
        type: Boolean,
        require: true,
        default: true
    },
    time_stamp: {
        type: Number,
        default: Date.now()
    }
})

module.exports = mongoose.model('VENDORS', VENDOR_SCHEMA)