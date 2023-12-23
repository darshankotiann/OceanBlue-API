const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const vendorAuth = require("../middleware/VendorAuth")

const { assignOrders, showOrders } = require("../controller/ordersController")


router.get("/",adminAuth, showOrders)
router.post("/add", adminAuth, assignOrders);
router.get("/vendor", vendorAuth, showOrders);


module.exports = router