const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

//User Login Api
exports.login = async (req, res) => {
  res.send("Hello World");
};

//User Register Api
exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstname, lastname, password, contactnumber, email } = req.body;

  try {
    //Checking if User Email already Exist
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User Already Exist" }] });
    }

    user = new User({
      firstname,
      lastname,
      email,
      password,
      contactnumber,
    });

    const salt = await bcrypt.genSalt(10);

    //Password Hashed
    user.password = await bcrypt.hash(password, salt);

    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          err: "NOT ABLE TO SAVE USER IN DB",
        });
      }
      res.json({
        name: user.firstname + user.lastname,
        email: user.email,
        id: user._id,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
