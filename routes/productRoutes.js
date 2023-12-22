const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const { addProduct, editProduct, getProduct, getSingleProduct } = require("../controller/productController");


router.get("/get", getProduct);
router.post("/single-product", getSingleProduct)
router.post("/add", adminAuth, addProduct);
router.patch("/edit", adminAuth, editProduct);



module.exports = router

