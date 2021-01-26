const Rating = require("../models/Rating");
const { validationResult } = require("express-validator");

//Inserting the rating detail of a product
exports.postrating = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { rate, comment } = req.body;
  productid = req.params.pid;

  rating = new Rating({
    productid,
    rate,
    comment,
  });

  try {
    await rating.save((err, result) => {
      if (err) {
        return res.status(401).json(err);
      }
      return res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
};

//Editing the rating detail of a product
exports.editrating = async (req, res) => {
  const { rate, comment } = req.body;

  rating = new Rating({
    rate,
    comment,
  });

  const newrating = {};
  if (rate) newrating.rate = rate;
  if (comment) newrating.comment = comment;

  try {
    rating = await Rating.findOneAndUpdate(
      { _id: req.params.rid },
      { $set: newrating },
      { new: true },
      (err, result) => {
        if (err) {
          return res.status(401).json(err);
        }
        return res.json(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};
