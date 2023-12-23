const { Schema, default: mongoose } = require("mongoose");

const ORDERS_SCHEMA = new Schema({
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
    enquiryID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "PRODUCT_ENQUIRY",
        required: true
    },
    timestamp: {
        type: Number,
        default: Date.now()
    },
    status: {
        type: String,
        required: true,
        default: "New"
    }
})

module.exports = mongoose.model('ORDERS', ORDERS_SCHEMA)