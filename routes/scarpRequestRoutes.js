const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const vendorAuth = require("../middleware/VendorAuth");
const { createService, getServiceData } = require("../controller/scrapRequestController")

router.get("/", adminAuth, getServiceData);
router.post("/create", vendorAuth, createService);

module.exports = router
