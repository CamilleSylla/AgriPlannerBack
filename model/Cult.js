const mongoose = require("mongoose");

const CultSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true,
    min: 4,
  },
  legume: {
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
    required: true
  },
  fenetre: {
    type: Number,
  },
  rowNum: {
    type: Number,
    required: true
  },
  rowLength: {
    type: Number,
    required: true
  },
  rowWidth: {
    type: Number,
    required: true
  },
  spaceBet: {
    type: Number,
    required: true
  },
  variete: {
    type: String,
  },
  color: {
      type: String,
      required: true,
  },
  start: {
      type: String,
      required: true,
  },
  parcelle: {
      type: String,
      required: true,
  },
  date: {
      type: Date,
      default: Date.now
  },
});

module.exports = mongoose.model("Cult", CultSchema);