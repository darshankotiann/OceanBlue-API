const { Schema, default: mongoose } = require("mongoose");


const SCRAPREQUEST_SCHEMA = new Schema({
    orderID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "ORDERS",
        required: true
    },
    vendorID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "VENDORS",
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
    status: {
        type: String,
        required: true,
        default: "New"
    }
})
module.exports = mongoose.model("SCRAP_REQUEST", SCRAPREQUEST_SCHEMA)
