const { mongo } = require("mongoose");

const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    categoryname: {
      type: String,
    },
    categoryimage: {
      type: String,
    },
    subcategory: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
