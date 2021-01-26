const express = require("express");
const { postrating, editrating } = require("../controllers/rating");
const { check } = require("express-validator");
const router = express.Router();

//Posting The rating of An Item
router.post(
  "/rating/:pid",
  [check("rate", "Rating is Required").notEmpty()],
  postrating
);

//Editing The rating of An Item
router.put("/rating/:rid", editrating);

module.exports = router;
