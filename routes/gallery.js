const express = require("express");
const { insertimage, deleteimage } = require("../controllers/gallery");
const multipart = require("connect-multiparty");
const router = express.Router();

//Inserting Image of Product
var multipartMiddleware = multipart();
router.post("/gallery/:pid", multipartMiddleware, insertimage);

//Deleting Image
router.post("/gallery/destroy/:imgid", deleteimage);

module.exports = router;
