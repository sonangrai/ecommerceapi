const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  productid: {
    type: mongoose.Schema.Types.ObjectId,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
