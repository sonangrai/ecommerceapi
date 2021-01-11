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

//Fetching all the category
exports.getallcat = async (req, res) => {
  try {
    category = await Category.find();
    res.json(category);
  } catch (error) {
    res.json(error);
  }
};

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

//Inserting the subcategory
exports.insertsubcategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { subcategory } = req.body;
  category = new Category({
    id: req.params.id,
    subcategory,
  });

  try {
    //Checking if Category
    let category = await Category.findById(req.params.catid);
    if (!category) {
      return res.status(400).json({ errors: [{ msg: "Category Dont Exist" }] });
    }

    let checkCat = await Category.find({
      _id: req.params.catid,
      subcategory: subcategory,
    });
    if (checkCat.length !== 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Sub Category Already Exist" }] });
    }

    category.subcategory.unshift(subcategory);
    await category.save();
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
