const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    productid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    imageurl: {
      type: String,
    },
    imgpublicid: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", GallerySchema);
