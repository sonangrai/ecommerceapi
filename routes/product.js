const express = require("express");
const { postproduct } = require("../controllers/product");
const { check } = require("express-validator");
const router = express.Router();

//Get All Product By Category
router.get("/product", (req, res) => {
  res.send("Product Get by Category");
});

//Post the product
router.post(
  "/product",
  [
    check("name", "Product Name is Require").notEmpty(),
    check("rate", "Rate is Required").notEmpty(),
    check("invamount", "Inventory Amount is Required").notEmpty(),
  ],
  postproduct
);

module.exports = router;
