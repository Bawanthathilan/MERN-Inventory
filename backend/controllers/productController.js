const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

//create product
const createProduct = asyncHandler(async (req, res) => {
  const { name, sku, category, quantity, price, description } = req.body;

  //validation
  if (!name || !sku || !category || !quantity || !price || !description) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  //image upload

  const product = new Product({
    user: req.user._id,
    name,
    sku,
    category,
    quantity,
    price,
    description,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

module.exports = { createProduct };
