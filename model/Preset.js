const mongoose = require("mongoose");

const presetSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true,
    min: 4,
  },
  parcelle: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  name: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  color: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  produit: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  variete: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  lengthP: {
    type: Number,
    required: true,
  },
  widthP: {
    type: Number,
    required: true,
  },
  espRangs: {
    type: Number,
    required: true,
  },
  rangs: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Preset",presetSchema);