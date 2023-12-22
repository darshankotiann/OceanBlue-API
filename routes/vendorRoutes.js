const express = require("express");
const router = express.Router();
const vendorAuth= require("../middleware/VendorAuth")
const { handleSignup, handleSignin, updateProfile, getAllVendor, getVendor } = require("../controller/vendorController");

router.get("/get", getAllVendor);
router.get("/get-profile", vendorAuth, getVendor)
router.post("/signup", handleSignup);
router.post("/signin", handleSignin);
router.patch("/update", vendorAuth, updateProfile);


module.exports = router;
