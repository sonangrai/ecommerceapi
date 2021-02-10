const express = require("express");
const {
  postproduct,
  getallproductbycat,
  getallproduct,
  updateproduct,
  getproduct,
} = require("../controllers/product");
const { check } = require("express-validator");
const router = express.Router();

//Get All Product By Category
router.get("/product/cat/:cat", getallproductbycat);

//Get All Product By ID
router.get("/product/:id", getproduct);

//Get All Product
router.get("/product", getallproduct);

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

//Edit the product
router.put("/product/:pid", updateproduct);

module.exports = router;
