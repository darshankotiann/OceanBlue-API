const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const { addProduct, editProduct, getProduct, getSingleProduct } = require("../controller/productController");


router.get("/", getProduct);
router.get("/:_id", getSingleProduct)
router.post("/add", adminAuth, addProduct);
router.patch("/:_id", adminAuth, editProduct);



module.exports = router

