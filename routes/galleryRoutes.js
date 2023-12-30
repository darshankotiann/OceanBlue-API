const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const vendorAuth = require("../middleware/VendorAuth");
const { createGallery, getGallery } = require("../controller/galleryController")
router.post("/add", adminAuth, createGallery);
router.get("/", getGallery)

module.exports = router