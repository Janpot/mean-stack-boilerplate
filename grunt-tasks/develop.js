/*jslint es5: true, devel: true, node: true, indent: 2, vars: true, nomen: true */
/*global */

'use strict';

module.exports = function (grunt) {
  grunt.registerTask('develop', [
    'build:dev',
    'watch'
  ]);
};