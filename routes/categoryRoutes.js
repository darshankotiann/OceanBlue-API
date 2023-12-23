const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth")
const { getcategory, addCategory, editCategory } = require("../controller/categoryController")


router.get("/", getcategory)
router.post("/add", adminAuth, addCategory);
router.patch("/:_id", adminAuth, editCategory)

module.exports = router