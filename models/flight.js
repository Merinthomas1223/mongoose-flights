const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new mongoose.Schema({
 airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },arrival: {
    type: Date
  }
}, {
  timestamps: true
});

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  }, airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },flightNo: {
    type: Number,
  },departs: {
    type: Date,
  },
  destinations: [destinationSchema]
}, {
  timestamps: true
});

flightSchema.static('getAll', function() {
  return this.find();
  });

  module.exports = mongoose.model('Flight', flightSchema);
