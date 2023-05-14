const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const bcrypt = require("bcryptjs");

// register user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.create(req.body);
  sendToken(user, 201, res);
});

//login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  //checking if given email and password
  if (!email || !password) {
    return next(new ErrorHandler("please enter email or password", 404));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  } else {
    const validPass = await bcrypt.compare(password, user.password);
    if (validPass) {
      sendToken(user, 200, res);

      // res.json({id: user._id, token, formId: user.form_id})

      //res.status(200).json(user)
    } else {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
  }
});

// Logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

// get all users

exports.getAllUsers = catchAsyncErrors(async (req, res) => {
  const users = await User.find({}).populate("form_id");
  res.status(200).json({
    success: true,
    users,
  });
});

// get individual user
exports.getIndividualUser = catchAsyncErrors(async (req, res) => {
  const users = await User.findById(req.params.id);
  if (!users) {
    return next(new ErrorHandler("user not found", 404));
  }
  res.status(200).json({
    success: true,
    users,
  });
});

// add form id
exports.addFormId = catchAsyncErrors(async (req, res) => {
  // console.log(req.body.form_id);
  const user = await User.findByIdAndUpdate(req.params.id, {
    form_id: req.body.form_id,
  });

  if (!user) {
    return next(new ErrorHandler("user not found", 404));
  }
  res.status(200).json({
    success: true,
    user,
  });
});
