const mongoose = require("mongoose");

const jurisdictionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Please enter jurisdiction id"],
  },

  name: {
    type: String,
    required: [true, "Please enter jurisdiction name"],
  },
});

module.exports = mongoose.model("Jurisdiction", jurisdictionSchema);
