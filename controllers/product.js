const Product = require("../models/Product");
const { validationResult } = require("express-validator");

//Inserting Product
exports.postproduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    description,
    category,
    subcategory,
    rate,
    invamount,
    color,
    weight,
  } = req.body;

  product = new Product({
    name,
    description,
    category,
    subcategory,
    rate,
    invamount,
    color,
    weight,
  });

  try {
    await product.save();
    res.json(product);
  } catch (error) {
    res.json(error);
  }
};

//Getting the Product By Category
exports.getallproductbycat = async (req, res) => {
  try {
    product = await Product.find({ category: req.params.cat });
    if (product.length != 0) {
      return res.json(product);
    }
    return res.status(401).json({ error: "No Item Found for this Category" });
  } catch (error) {
    res.json(error);
  }
};

//Getting all the Product
exports.getallproduct = async (req, res) => {
  try {
    product = await Product.find();
    return res.json(product);
  } catch (error) {
    res.json(error);
  }
};

//Updating Product
exports.updateproduct = async (req, res) => {
  const {
    name,
    description,
    category,
    subcategory,
    rate,
    invamount,
    color,
    weight,
  } = req.body;

  product = new Product({
    name,
    description,
    category,
    subcategory,
    rate,
    invamount,
    color,
    weight,
  });

  const newproductfield = {};
  if (name) newproductfield.name = name;
  if (description) newproductfield.description = description;
  if (category) newproductfield.category = category;
  if (subcategory) newproductfield.subcategory = subcategory;
  if (rate) newproductfield.rate = rate;
  if (invamount) newproductfield.invamount = invamount;
  if (color) newproductfield.color = color;
  if (weight) newproductfield.weight = weight;

  try {
    product = await Product.findOneAndUpdate(
      { _id: req.params.pid },
      { $set: newproductfield },
      { new: true }
    );
    return res.json(product);
  } catch (error) {
    console.log(error);
  }
};
