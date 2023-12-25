const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const vendorAuth = require("../middleware/VendorAuth");
const { createService, getServiceData,updateServiceStatus } = require("../controller/scrapRequestController")

router.get("/", adminAuth, getServiceData);
router.patch("/:_id", adminAuth, updateServiceStatus);
router.post("/create", vendorAuth, createService);

module.exports = router
