const Jurisdiction = require("../models/jurisdictionModel");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create jurisdiction
exports.createJurisdiction = catchAsyncErrors(async (req, res, next) => {
  const jurisdiction = await Jurisdiction.create(req.body);

  res.status(200).json({
    success: true,
    jurisdiction,
  });
});

// get jurisdiction
exports.getAllJurisdiction = catchAsyncErrors(async (req, res) => {
  const jurisdictions = await Jurisdiction.find({});
  res.status(200).json({
    success: true,
    jurisdictions,
  });
});
