const { Schema, default: mongoose } = require("mongoose");

const PRODUCTENQUIRY_SCHEMA = new Schema({
    productID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "PRODUCTS",
        required: true
    },
    vendorID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "VENDORS",
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Number,
        default: Date.now()
    },
    completed: {
        type: Boolean,
        required: true,
        default: "false"
    }
})

module.exports = mongoose.model("PRODUCT_ENQUIRY", PRODUCTENQUIRY_SCHEMA)