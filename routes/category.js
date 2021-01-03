const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

router.get("/category", (req, res) => {
  res.send("Category Get");
});

module.exports = router;
