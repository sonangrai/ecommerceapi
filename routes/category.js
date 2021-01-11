const express = require("express");
const { check } = require("express-validator");
const {
  insertcategory,
  insertsubcategory,
  getallcat,
} = require("../controllers/category");
const multipart = require("connect-multiparty");

const router = express.Router();

//Retrieved all the category
router.get("/category", getallcat);

//Posting the category
var multipartMiddleware = multipart();
router.post(
  "/category",
  multipartMiddleware,
  [check("categoryname", "Enter category name").notEmpty()],
  insertcategory
);

//Posting the sub category
router.post(
  "/subcategory/:catid",
  [check("subcategory", "Enter Sub category").notEmpty()],
  insertsubcategory
);
module.exports = router;
