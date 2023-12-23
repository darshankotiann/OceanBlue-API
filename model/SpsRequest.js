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
    status: {
        type: String,
        required: true,
        default: "New"
    }
})
module.exports = mongoose.model("SPSREQUEST", SPS_SCHEMA)
