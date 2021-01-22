const express = require("express");
const { insertimage } = require("../controllers/gallery");
const multipart = require("connect-multiparty");
const router = express.Router();

//Inserting Image of Product
var multipartMiddleware = multipart();
router.post("/gallery/:pid", multipartMiddleware, insertimage);

module.exports = router;
