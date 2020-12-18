const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
    service: String,
    beskrivelse: String,
    varighed: String,
    pris: String,
});

module.exports = mongoose.model("Service", serviceSchema, 'service');
