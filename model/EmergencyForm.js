const { Schema, default: mongoose } = require("mongoose");


const EMERGENCY_SCEHMA = new Schema({
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
    timestamp: {
        type: Number,
        default: Date.now()
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    message: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model("EMERGENCY", EMERGENCY_SCEHMA)
