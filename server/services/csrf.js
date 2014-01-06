'use strict';

// uses XSRF-TOKEN instead of CSRF-TOKEN for angular
function getCsrfToken(request) {
  return request.headers['x-xsrf-token'];
}

// angular expects the token in a cookie
function setCsrfToken(request, response, next) {
  response.cookie('XSRF-TOKEN', request.csrfToken());
  next();
}

module.exports = {
  
  getCsrfToken: getCsrfToken,
  setCsrfToken: setCsrfToken
  
};
