'use strict';

var passport       = require('passport'),
    GoogleStrategy = require('passport-google').Strategy,
    config         = require('config'),
    mongoose       = require('mongoose');



passport.use(new GoogleStrategy({
  returnURL: config.baseUrl + '/auth/google/return',
  realm    : config.baseUrl
}, function (id, profile, done) {
  var User = mongoose.model('User');
  User.findByGoogleId(id, function (err, data) {
    if (err) {
      return done(err);
    }
    
    var user = data[0];
    
    if (user) {
      return done(null, user);
    }
    
    User.createFromGoogle(id, profile, done);
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  var User = mongoose.model('User');
  User.find(id, function (err, data) {
    done(err, data[0]);
  });
});



function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send(401);
  }
}


module.exports = {
  ensureAuthenticated: ensureAuthenticated
};