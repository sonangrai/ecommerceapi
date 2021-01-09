const Category = require("../models/Category");
const { validationResult } = require("express-validator");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDAPISECRET,
});

//Inserting The Category
exports.insertcategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const imagedata = req.files.categoryimage;

  //Uploading to Cloudinary
  cloudinary.uploader.upload(imagedata.path, async (error, result) => {
    if (result) {
      const categoryname = req.body.categoryname;
      const categoryimage = "";

      category = new Category({
        categoryimage,
        categoryname,
      });

      category.categoryimage = result.url;

      try {
        category.save();
        res.json(category);
      } catch (error) {}
    } else {
      return res.json(error);
    }
  });
};
