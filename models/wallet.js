const mongoose = require('mongoose');
const walletModel = new mongoose.Schemas({
    name: {
        type: String
    },
    balance: {
        type: Number,
        default: 0.0
    },
    currency: {
        type: String,
        default: USD
    }

}, {timestamps: True})
module.exports = new mongoose.model('wallet', walletModel)