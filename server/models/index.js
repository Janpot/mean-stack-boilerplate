'use strict';

var fs   = require('fs'),
    path = require('path');

fs.readdirSync(__dirname).forEach(function (filename) {
  var fullPath = path.resolve(__dirname, filename);
  require(fullPath);
});
