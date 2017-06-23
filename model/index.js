var mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://benjamin:password@ds133162.mlab.com:33162/dronedb');


module.exports.Part = require('./part.js');
module.exports.Drone = require('./drone.js');
