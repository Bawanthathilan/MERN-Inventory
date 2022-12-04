const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const { fileSizeFormatter } = require("../utils/fileUpload");
const cloudinary = require("cloudinary").v2;

//create product
const createProduct = asyncHandler(async (req, res) => {
  const { name, sku, category, quantity, price, description } = req.body;

  //validation
  if (!name || !sku || !category || !quantity || !price || !description) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  //handle file upload
  let fileData = {};

  if (req.file) {
    let uploadedFile;

    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "inventory",
        resourse_type: "image",
      });
    } catch (error) {
      res.status(500);
      throw new Error("File upload failed");
    }

    fileData = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
    };
  }

  const product = new Product({
    user: req.user._id,
    name,
    sku,
    category,
    quantity,
    price,
    description,
    image: fileData,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//get all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ user: req.user._id }).sort(
    "-createdAt"
  );
  res.status(200).json(products);
});

//get single product
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Unauthorized");
  }
  res.status(200).send(product);
});

module.exports = { createProduct, getProducts, getProduct };
