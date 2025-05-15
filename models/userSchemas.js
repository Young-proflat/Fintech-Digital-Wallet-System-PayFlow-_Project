const mongoose = require("mongoose")

const userModel = new mongoose.Schemas({
    name: {
        type: String,
        required: True
    },
    email: {
        type: String,
        required: True,
        unique: True
    },
    password: {
        type: String,
        required: True
    }
}, {timestamps: True});

module.exports = mongoose.model("User", userModel)