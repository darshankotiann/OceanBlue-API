const { Schema, default: mongoose } = require("mongoose");

const PRODUCT_SCHEMA = new Schema({
    product_img: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true
    },
    product_price: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "CATEGORY"
    }
})

module.exports = mongoose.model("PRODUCTS", PRODUCT_SCHEMA)