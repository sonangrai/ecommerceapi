const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  contactnumber: {
    type: String,
  },
  usertype: {
    type: String,
    default: 1,
  },
});

module.exports = mongoose.model("User", UserSchema);
