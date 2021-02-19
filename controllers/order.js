const Order = require("../models/Order");

//Placing Order
exports.placeorder = async (req, res) => {
  const { quantity } = req.body;
  const userid = req.params.uid;
  const productid = req.params.pid;

  const order = new Order({
    userid,
    productid,
    quantity,
  });

  try {
    await order.save();
    res.json(order);
  } catch (error) {
    res.json(error);
  }
};
