const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    produit: {
        type: String,
        required: true,
    },
    variete: {
        type: String,
        required: true,
    },
    fournisseur: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        required: true
    },
    planType: {
        type: String,
    }
})

module.exports = mongoose.model("Stock",stockSchema);