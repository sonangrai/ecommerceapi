const express = require("express");
const { postrating } = require("../controllers/rating");
const router = express.Router();

//Posting The rating of An Item
router.post("/rating", postrating);

module.exports = router;
