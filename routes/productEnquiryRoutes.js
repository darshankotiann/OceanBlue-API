const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const vendorAuth = require("../middleware/VendorAuth")
const { createProductEnquiry, getProductEnquiry } = require("../controller/productEnquiryController")

router.get("/",adminAuth, getProductEnquiry);
router.post("/create", vendorAuth, createProductEnquiry)

module.exports=router