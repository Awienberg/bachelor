const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  str: String,
  service: String,
  dato: String,
  tid: String,
  navn: {
    type: String,
    required: [true, 'Indtast venligst dit navn'],
  },
  email: {
    type: String,
    required: [true, 'Indtast venligst din email'],
  },
  telefon: {
    type: Number,
    required: [true, 'Indtast venligst dit telefon nummer'],
  },
  hundenavn: String,
  hunderace: String,
});


const Booking = mongoose.model('Booking', bookingSchema, 'booking');

module.exports = Booking;
