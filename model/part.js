"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PartSchema = new Schema({
    name: String,
    price: Number,
    link: String,
    category: String
});

module.exports = mongoose.model('Part', PartSchema);
