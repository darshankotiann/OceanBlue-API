const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const vendorAuth = require("../middleware/VendorAuth")
const { handleSignup, handleSignin, updateProfile, getAllVendor, getVendor } = require("../controller/vendorController");

router.get("/get", adminAuth, getAllVendor);
router.get("/get-profile", vendorAuth, getVendor)
router.post("/signup", handleSignup);
router.post("/signin", handleSignin);
router.patch("/update",adminAuth, vendorAuth, updateProfile);


module.exports = router;
