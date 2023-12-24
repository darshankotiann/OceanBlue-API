const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const { addProduct, editProduct, getProduct, getSingleProduct, getProductByCategory, deleteProduct } = require("../controller/productController");
const vendorAuth = require("../middleware/VendorAuth");


router.get("/", getProduct);
router.get("/:_id", getSingleProduct)
router.get("/category/:_id", getProductByCategory)
router.post("/add", adminAuth, addProduct);
router.delete("/delete/:_id", adminAuth, deleteProduct);

router.patch("/:_id", adminAuth, editProduct);



module.exports = router

