const { Schema, default: mongoose } = require("mongoose");

const GALLERY_SCHEMA=new Schema({
  
    url:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("GALLERY", GALLERY_SCHEMA)