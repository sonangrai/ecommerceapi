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

//Removing item from the cart
exports.removeitem = async (req, res) => {
  try {
    const dres = await Cart.findByIdAndDelete(req.params.id);
    res.json(dres);
  } catch (error) {
    res.json(error);
  }
};

//Get All Cart Info
exports.getallcart = async (req, res) => {
  try {
    const resdata = await Cart.find();
    res.json(resdata);
  } catch (error) {
    res.json(error);
  }
};
