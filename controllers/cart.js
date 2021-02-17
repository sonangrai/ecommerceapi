const Cart = require("../models/Cart");

//Adding item to Cart
exports.addcart = async (req, res) => {
  const { quantity } = req.body;
  const userid = req.params.uid;
  const productid = req.params.pid;

  const cart = new Cart({
    userid,
    productid,
    quantity,
  });

  try {
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.json(error);
  }
};
