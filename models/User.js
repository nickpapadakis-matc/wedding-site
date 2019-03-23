const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  coming: {
    type: Boolean,
    required: true,
    default: true
  },
  email: {
    type: String,
    default: null
  },
  food: {
    type: String,
    required: true
  },
  hasGuest: {
    type: Boolean
  },
  guestName: {
    type: String
  },
  guestFood: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);
