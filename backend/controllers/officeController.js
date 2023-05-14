const Office = require("../models/officeModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//create office   -- admin
exports.createOffice = catchAsyncErrors(async (req, res, next) => {
  const product = await Office.create(req.body);

  res.status(200).json({
    success: true,

    product,
  });
});

// get all office
exports.getAllOffice = catchAsyncErrors(async (req, res) => {
  const offices = await Office.find().populate("jurisdiction_id");
  res.status(200).json({
    success: true,

    offices,
  });
});

// update office
exports.updateOffice = catchAsyncErrors(async (req, res, next) => {
  let office = await Office.findById(req.params.id);
  office = await Office.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });

  if (!office) {
    return next(new ErrorHandler("office not found", 404));
  }
  res.status(200).json({
    success: true,
    office,
  });
});

//delete office
exports.deleteOffice = catchAsyncErrors(async (req, res, next) => {
  let office = await Office.findById(req.params.id);
  office = await Office.findByIdAndDelete(req.params.id);
  if (!office) {
    return next(new ErrorHandler("office not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Office deleted successfully",
  });
});

// get single office
exports.getOfficeDetails = catchAsyncErrors(async (req, res, next) => {
  const office = await Office.findById(req.params.id);
  if (!office) {
    return next(new ErrorHandler("office not found", 404));
  }
  res.status(200).json({
    success: true,
    office,
  });
});
