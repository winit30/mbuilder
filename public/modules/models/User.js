const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    minlength: 10
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 6,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
}, {usePushEach: true});

UserSchema.methods.toJSON = function() {
	var user = this;
	var userObject = user.toObject();
	return _.pick(userObject, ["_id","name","phone","email"]);
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};