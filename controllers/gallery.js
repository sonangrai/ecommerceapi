const Gallery = require("../models/Gallery");
const Product = require("../models/Product");
const cloudinary = require("cloudinary").v2;

require("dotenv").config();

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDAPISECRET,
});

exports.insertimage = async (req, res) => {
  //Finding the product existence
  const check = await Product.findById(req.params.pid);
  if (!check) {
    return res.status(401).json({ msg: "Product Not found" });
  }

  const imagedata = req.files.image;

  //Uploading to Cloudinary
  cloudinary.uploader.upload(imagedata.path, async (error, result) => {
    if (result) {
      const productid = req.params.pid;
      const imageurl = "";

      gallery = new Gallery({
        productid,
        imageurl,
      });

      gallery.imageurl = result.url;

      try {
        gallery.save();
        res.json(gallery);
      } catch (error) {}
    } else {
      return res.json(error);
    }
  });
};
