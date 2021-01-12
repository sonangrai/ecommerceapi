const mongoose = require("mongoose");

const ProductScheme = new mongoose.SchemaType(
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
    invamount: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = Product = mongoose.model("Product", ProductScheme);
