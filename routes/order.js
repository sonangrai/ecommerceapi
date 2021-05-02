const express = require("express");
const { placeorder } = require("../controllers/order");
const router = express.Router();

//Placing the order
router.post("/order/", placeorder);

module.exports = router;
