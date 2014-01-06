'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  displayName: String,
  email      : String,
  googleId   : String
});

userSchema.statics.findByGoogleId = function (id, cb) {
  this.find({ googleId: id }, cb);
};

userSchema.statics.createFromGoogle = function (id, profile, cb) {
  var email;
  
  if (profile.emails.length > 0) {
    email = profile.emails[0].value;
  }
  
  this.create({
    displayName: profile.displayName,
    email      : email,
    googleId   : id
  }, cb);
};

userSchema.methods.serialize = function () {
  return {
    id         : this._id,
    displayName: this.displayName,
    email      : this.email
  };
};

mongoose.model('User', userSchema);
