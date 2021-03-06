const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  guest: {
    type: String
  }
});

module.exports = Guest = mongoose.model('guests', GuestSchema);
