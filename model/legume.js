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
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  unit: {
    type: String,
    required: true,
  },
  growLength: {
    type: Number,
  },
  variete: {
    type: Array,
    "default": []
  },
  color: {
      type: String,
      required: true,
  }
});

module.exports = mongoose.model("Legume", parcelleSchema);