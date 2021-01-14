const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    subcategory: {
      type: String,
    },
    rate: {
      type: Number,
    },
    color: {
      type: String,
    },
    weight: {
      type: Number,
    },
    invamount: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
