const User = require("../models/User");

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
