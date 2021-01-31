const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  alluser,
  alladmin,
  updateinfo,
  changepswd,
  recover,
  newpswd,
  getinfo,
} = require("../controllers/user");

//Get All User
router.get("/user/:id", getinfo);

//Get All User
router.get("/user", alluser);

//Get All Admin
router.get("/admin", alladmin);

//Update the User Info
router.put("/user/:id", updateinfo);

//Change Password
router.put(
  "/password/:id",
  [
    check("password", "Password must be more than 6 character").isLength({
      min: 6,
    }),
  ],
  changepswd
);

//Forgot Password
router.post("/recover", [check("email", "Email Required").notEmpty()], recover);
router.post("/resetpassword/:userid/:token", newpswd);

module.exports = router;
