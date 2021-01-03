const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { alluser, alladmin, updateinfo } = require("../controllers/user");

//Get All User
router.get("/user", alluser);

//Get All Admin
router.get("/admin", alladmin);

//Update the User Info
router.put("/user/:id", updateinfo);

module.exports = router;
