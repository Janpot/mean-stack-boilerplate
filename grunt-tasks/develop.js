'use strict';

module.exports = function (grunt) {
  grunt.registerTask('develop', [
    'build:dev',
    'watch'
  ]);
};