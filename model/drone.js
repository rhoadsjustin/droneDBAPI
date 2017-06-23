"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Part = require ('./part.js')



var DroneSchema = new Schema({
    frame: {
      type: Schema.Types.ObjectId,
      ref: 'Part'
    },
    electronicSpeedController: {
      type: Schema.Types.ObjectId,
      ref: 'Part'
    },
    motor: {
      type: Schema.Types.ObjectId,
      ref: 'Part'
    },
    flightController: {
      type: Schema.Types.ObjectId,
      ref: 'Part'
    },
    videoTransmitter: {
      type: Schema.Types.ObjectId,
      ref: 'Part'
    },
    propeller: {
      type: Schema.Types.ObjectId,
      ref: 'Part'
    },
    camera: {
      type: Schema.Types.ObjectId,
      ref: 'Part'
    },
    transmitter: {
      type: Schema.Types.ObjectId,
      ref: 'Part'
    },
    goggle: {
      type: Schema.Types.ObjectId,
      ref: 'Part'
    }
});

module.exports = mongoose.model('Drone', DroneSchema);
