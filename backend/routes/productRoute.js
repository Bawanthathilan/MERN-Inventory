const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const { createProduct } = require("../controllers/productController");
const { upload } = require("../utils/fileUpload");

router.post("/", protect, upload.single("image"), createProduct);

module.exports = router;
