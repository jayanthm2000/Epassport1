const mongoose = require("mongoose");

const officeSchema = new mongoose.Schema({
  office_id: {
    type: Number,
  },
  office_name: {
    type: String,
    required: [true, "Please enter office name"],
  },
  jurisdiction_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Jurisdiction",
  },
  address: {
    type: String,
    required: [true, "Please enter office address"],
  },
  phone_number: {
    type: Number,
    required: [true, "Please enter office phone number"],
  },
  city: {
    type: String,
  },
});

module.exports = mongoose.model("Office", officeSchema);
