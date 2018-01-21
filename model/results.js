'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResultsSchema = new Schema({
  avgTime: Number,
  time: Number,
  uid: Number,
  tid: Number,
});

module.exports = mongoose.model('Result', ResultsSchema);
