const express = require("express");
const { addcart } = require("../controllers/cart");
const router = express.Router();

//Adding item to cart
router.post("/cart/", addcart);

module.exports = router;
