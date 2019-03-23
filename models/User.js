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
    type: Boolean,
    default: null
  },
  guestName: {
    type: String,
    default: null
  },
  guestFood: {
    type: String,
    default: null
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);
