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

//Inserting an image to gallery
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
      const imgpublicid = "";

      gallery = new Gallery({
        productid,
        imageurl,
        imgpublicid,
      });

      gallery.imageurl = result.url;
      gallery.imgpublicid = result.public_id;

      try {
        gallery.save();
        res.json(gallery);
      } catch (error) {}
    } else {
      return res.json(error);
    }
  });
};

//Removing Image From Gallery product
exports.deleteimage = async (req, res) => {
  //Checking the Image
  const check = await Gallery.findById(req.params.imgid);
  if (!check) {
    return res.status(401).json({ error: "Image Not Found" });
  }

  //Uploading to Cloudinary
  cloudinary.uploader.destroy(check.imgpublicid, async (error, result) => {
    if (result) {
      try {
        const delres = await Gallery.findByIdAndDelete(req.params.imgid);
        res.json(delres);
      } catch (error) {}
    } else {
      return res.json(error);
    }
  });
};

//Getting the image of products
exports.getimage = async (req, res) => {
  //Finding the product existence
  const check = await Product.findById(req.params.pid);
  if (!check) {
    return res.status(401).json({ msg: "Image not found for this Product" });
  }

  try {
    const d = await Gallery.find({ productid: req.params.pid });
    res.json(d);
  } catch (error) {
    return res.json(error);
  }
};
