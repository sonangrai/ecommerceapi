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
  } = req.body;

  product = new Product({
    name,
    description,
    category,
    subcategory,
    rate,
    invamount,
  });

  try {
    product.save((err, result) => {
      if (err) {
        return res.status(401).json(err);
      }
      res.json(result);
    });
  } catch (error) {}
};
