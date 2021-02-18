const express = require("express");
const { addcart, removeitem, getallcart } = require("../controllers/cart");
const router = express.Router();

//Adding item to cart
router.post("/cart/:pid/:uid", addcart);

//Removing item from cart
router.delete("/cart/:id", removeitem);

//Get all Cart item
router.get("/cart", getallcart);

module.exports = router;
