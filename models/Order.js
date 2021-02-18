const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  items: {
    type: Array,
    default: [],
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
