const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.index({ updatedAt: 1 }, { expireAfterSeconds: 3600 });

const PasswordReset = mongoose.model("PasswordReset", schema);

module.exports = PasswordReset;
