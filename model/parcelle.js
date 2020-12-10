const mongoose = require("mongoose");

const parcelleSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true,
    min: 4,
  },
  name: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  length: {
    type: Number,
  },
  width: {
    type: Number,
  },
  surface: {
    type: Number,
  },
});

module.exports = mongoose.model("Parcelle", parcelleSchema);
