"use strict";
const mon = require("../models/mongooseWrap");
const Str = require("../models/str");
const dbServer = 'localhost';
const dbname = 'booking';

exports.getSizes = async function (sort) {
    try {
        let cs = await mon.retrieve(dbServer, dbname, Str, {}, sort);
        return cs;
    } catch (e) {
        console.log(e);
    }
}
