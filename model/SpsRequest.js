const { Schema, default: mongoose } = require("mongoose");

const SPS_SCHEMA = new Schema({

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
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
})
module.exports = mongoose.model("SPSREQUEST", SPS_SCHEMA)
