"use strict";
const mon = require("../models/mongooseWrap");
const Service = require("../models/service");
const Str = require("../models/str");
const dbServer = 'localhost';
const dbname = 'booking';

exports.getServices = async function (que, sort) {
    try {
        let cs = await mon.retrieve(dbServer, dbname, Service, que, sort);
        return cs;
    } catch (e) {
        console.log(e);
    }
}

// get service from database
exports.service = async function (req, res) {
    let check = { reply: null };
    let str = await mon.retrieve(dbServer, dbname, Str, check, { sort: { created: -1 } });
    let service = await mon.retrieve(dbServer, dbname, Service, check, { sort: { created: -1 } });
    res.render('booking', {
        title: 'Online booking',
        subtitle: 'Book en tid',
        strs: str,
        services: service,
    });
  };
