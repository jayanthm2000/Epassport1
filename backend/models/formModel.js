const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  last_name: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  DOB: {
    type: Date,
  },
  email: {
    type: String,
  },
  birth_place: {
    type: String,
  },
  gender: {
    type: String,
  },
  state: {
    type: String,
  },
  district: {
    type: String,
  },
  maritial_status: {
    type: String,
  },
  PAN: {
    type: String,
  },
  employement_type: {
    type: String,
  },
  qualification: {
    type: String,
  },
  father_name: {
    type: String,
  },
  surname: {
    type: String,
  },
  mother_name: {
    type: String,
  },
  surnames: {
    type: String,
  },
  house_no: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  userid: {
    type: String,
  },
});

module.exports = mongoose.model("Form", formSchema);
