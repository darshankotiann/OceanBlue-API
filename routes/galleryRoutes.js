const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const vendorAuth = require("../middleware/VendorAuth");
const { createGallery, getGallery, deleteGallery } = require("../controller/galleryController")
router.post("/add", adminAuth, createGallery);
router.delete("/:_id", adminAuth, deleteGallery);
router.get("/", getGallery)

module.exports = router