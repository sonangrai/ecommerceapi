const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    productid: {
      type: mongoose.Schema.Types.ObjectId,
    },
    imageurl: {
      type: String,
    },
  },
  { timestamps: true }
);

exports.module = mongoose.model("Gallery", GallerySchema);
