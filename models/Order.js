const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  items: {
    type: Array,
    default: [],
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
