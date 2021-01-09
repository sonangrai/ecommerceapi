const express = require("express");
const { check } = require("express-validator");
const { insertcategory } = require("../controllers/category");
const multipart = require("connect-multiparty");

const router = express.Router();

//Retrieved all the category
router.get("/category", (req, res) => {
  res.send("Category Get");
});

//Posting the category
var multipartMiddleware = multipart();
router.post(
  "/category",
  multipartMiddleware,
  [check("categoryname", "Enter category name").notEmpty()],
  insertcategory
);

module.exports = router;
