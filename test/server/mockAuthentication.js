'use strict';
 
var passport = require('passport'),
    util     = require('util');
 
function MockStrategy(pass, user) {
  this.name = 'mock';
  this.pass = pass || true;
  this.user = user || { };
}
 
util.inherits(MockStrategy, passport.Strategy);
 
MockStrategy.prototype.authenticate = function authenticate() {
  if (this.pass) {
    this.success(this.user);
  } else {
    this.fail('Unauthorized');
  }
};



exports.fail = function () {
  passport.use(new MockStrategy(false));
};
 
exports.success = function (user) {
  passport.use(new MockStrategy(true, user));
};
