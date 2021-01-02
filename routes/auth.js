const express = require("express");
const { check } = require("express-validator");
const { login, signup } = require("../controllers/auth");
const router = express.Router();

router.get("/auth", login);
router.post(
  "/auth",
  [
    check("firstname", "FirstName Required ").notEmpty(),
    check("lastname", "FirstName Required ").notEmpty(),
    check("email", "Enter Valid Email Address").isEmail(),
    check("password", "Password must be more than 6 character").isLength({
      min: 6,
    }),
  ],
  signup
);

module.exports = router;
