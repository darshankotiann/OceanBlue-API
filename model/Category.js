const { Schema, default: mongoose } = require("mongoose");

const CATEGORY_SCHEMA = new Schema({

    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
    },
    timestamp: {
        type: Number,
        default: Date.now()
    }
})


module.exports = mongoose.model('CATEGORY', CATEGORY_SCHEMA);