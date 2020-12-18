const mongoose = require("mongoose");

const strSchema = mongoose.Schema({
    str: String,
});

module.exports = mongoose.model("Str", strSchema, 'str');
