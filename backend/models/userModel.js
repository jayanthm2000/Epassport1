const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  last_name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  DOB: {
    type: Date,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    validate: [validator.isEmail, "please enter valid email"],
  },
  password: {
    type: String,
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  form_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
    default: null,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// comparing password
userSchema.methods.comparePassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

// generation password reset token
userSchema.methods.getResetPasswordToken = async function () {
  //generatingg tokrn
  const resetToken = crypto.randomBytes(20).toString("hex");
  //hashing and adding to user schema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
