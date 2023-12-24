const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const vendorAuth = require("../middleware/VendorAuth")
const { handleSignup, handleSignin, updateProfile, getAllVendor, getVendor, updateProfileByAdmin } = require("../controller/vendorController");

router.get("/get", adminAuth, getAllVendor);
router.get("/get-profile", vendorAuth, getVendor)
router.post("/signup", handleSignup);
router.post("/signin", handleSignin);
router.patch("/update", vendorAuth, updateProfile);
router.patch("/:_id", adminAuth, updateProfileByAdmin)


module.exports = router;
