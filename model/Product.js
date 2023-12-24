const { Schema, default: mongoose } = require("mongoose");

const PRODUCT_SCHEMA = new Schema({
    image: {
        type: String,
        required: true,

    },
    name: {
        type: String,
        required: true,
        unique: true

    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "CATEGORY"
    },
    timestamp: {
        type: Number,
        default: Date.now()
    }
})

module.exports = mongoose.model("PRODUCTS", PRODUCT_SCHEMA)