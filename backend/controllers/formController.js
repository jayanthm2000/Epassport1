const Form = require("../models/formModel");
const Office = require("../models/officeModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// fill first form
exports.newForm = catchAsyncErrors(async (req, res, next) => {
  const {
    first_name,
    last_name,
    DOB,
    email,
    birth_place,
    gender,
    state,
    district,
    maritial_status,
    PAN,
    employement_type,
    qualification,
    father_name,
    surname,
    mother_name,
    surnames,
    house_no,
    street,
    city,
    pincode,
    userid,
  } = req.body;

  console.log(req.body);
  const form = await Form.create({
    first_name,
    last_name,
    DOB,
    email,
    birth_place,
    gender,
    state,
    district,
    maritial_status,
    PAN,
    employement_type,
    qualification,
    father_name,
    surname,
    mother_name,
    surnames,
    house_no,
    street,
    city,
    pincode,
    userid,
  });

  res.status(201).json({
    success: true,
    form,
  });
});

// get all forms
exports.getAllForms = catchAsyncErrors(async (req, res) => {
  const form = await Form.find({});
  res.status(200).json({
    success: true,
    form,
  });
});

// get individual form
exports.getIndividualForm = catchAsyncErrors(async (req, res) => {
  const form = await Form.findById(req.params.id);
  if (!form) {
    return next(new ErrorHandler("user not found", 404));
  }
  res.status(200).json({
    success: true,
    form,
  });
});
