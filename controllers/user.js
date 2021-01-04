const User = require("../models/User");
const Passwordreset = require("../models/Passwordreset");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Returning all the admin users
exports.alladmin = async (req, res) => {
  try {
    const user = await User.find({ usertype: "0" });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

//Returning all the user users
exports.alluser = async (req, res) => {
  try {
    const user = await User.find({ usertype: "1" });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

//Edit The Information
exports.updateinfo = async (req, res) => {
  const { firstname, lastname, contactnumber, email } = req.body;

  user = new User({
    firstname,
    lastname,
    email,
    contactnumber,
  });

  const userFields = {};
  if (firstname) userFields.firstname = firstname;
  if (lastname) userFields.lastname = lastname;
  if (email) userFields.email = email;
  if (contactnumber) userFields.contactnumber = contactnumber;

  try {
    //Checking if User Email already Exist
    let checkemail = await User.findOne({ email });
    if (checkemail) {
      return res.status(400).json({ errors: [{ msg: "Email Already Exist" }] });
    }

    let user = await User.findById(req.params.id);

    if (user) {
      user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: userFields },
        { new: true }
      );
      return res.json(user);
    }

    user = new User(userFields);
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//Change Password
exports.changepswd = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { oldpassword, password } = req.body;

  user = new User({
    password,
  });

  const salt = await bcrypt.genSalt(10);

  const userFields = {};
  if (password) userFields.password = await bcrypt.hash(password, salt);

  try {
    let user = await User.findById(req.params.id);

    //Checking Password
    const isMatch = await bcrypt.compare(oldpassword, user.password);

    if (!isMatch) {
      return res.status(400).send("Password Dont Match");
    }

    user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: userFields },
      { new: true }
    );
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//Recover Password
exports.recover = async (req, res) => {
  const { email } = req.body;

  //Check Email
  let checkemail = await User.findOne({ email });
  if (!checkemail) {
    return res
      .status(400)
      .json({ errors: [{ msg: "Email Not Found for any User" }] });
  }

  //Creating a Token
  var payload = {
    id: checkemail._id, // User ID from database
    email: email,
  };

  //Creating token
  var tok = jwt.sign(payload, process.env.JWTSECRET);

  passwordreset = new Passwordreset({
    user: checkemail._id,
    token: tok,
  });
  // passwordreset.user = payload.id;
  // passwordreset.token = tok;

  passwordreset.save((err, token) => {
    if (err) throw err;
    res.send(
      '<a href="/api/resetpassword/' +
        payload.id +
        "/" +
        tok +
        '">Reset password</a>'
    );
  });
};

//Change Password After Recovery
exports.newpswd = async (req, res) => {
  let user_id = req.params.userid;
  //Getting token
  let tokencheck = await Passwordreset.find({ user: user_id });
  if (!tokencheck) {
    res.status(401).json({ errors: [{ msg: "Token Expired" }] });
  }

  //Checking Token
  if (tokencheck[0].token !== req.params.token) {
    res.status(401).json({ errors: [{ msg: "Token Not Valid" }] });
  }

  const { password } = req.body;

  user = new User({
    password,
  });

  const salt = await bcrypt.genSalt(10);

  const userFields = {};
  if (password) userFields.password = await bcrypt.hash(password, salt);

  try {
    let user = await User.findById(req.params.userid);

    user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: userFields },
      { new: true }
    );
    return res.json({ success: [{ msg: "Password Changed Successfully" }] });
  } catch (error) {
    console.log(error);
  }
};
