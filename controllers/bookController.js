'use strict';
const mon = require('../models/mongooseWrap');
const Booking = require('../models/booking');
const dbServer = 'localhost';
const dbname = 'booking';

exports.getBooking = async function(query, sort) {
    try {
        let cs = await mon.retrieve(dbServer, dbname, Booking, query, sort);
        return cs;
    } catch (e) {
        console.error(e);
    }
};
exports.upsertBook = async function(req) {
    let check = { email: req.body.email };
    let booking = new Booking({
        str: req.body.str,
        service: req.body.service,
        dato: req.body.dato,
        tid: req.body.tid,
        navn: req.body.navn,
        email: req.body.email,
        telefon: req.body.telefon,
        hundenavn: req.body.hundenavn,
        hunderace: req.body.hunderace,
    });
    try {
        let cs = await mon.upsert(dbServer, dbname, Booking, booking, check);
    } catch (e) {
        console.error(e);
    }
};

// Bookings
exports.bookings = async function (req, res) {
    let check = { reply: null };
    let booking = await mon.retrieve(dbServer, dbname, Booking, check, { sort: { created: -1 } });
    res.render('bookings', {
      title: 'Oprettede aftaler',
      subtitle: 'Her ses alle oprettede aftaler',
      bookings: booking,
    });
  };