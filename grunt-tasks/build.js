/*jslint es5: true, devel: true, node: true, indent: 2, vars: true, nomen: true */
/*global */

'use strict';

module.exports = function (grunt) {
  
  grunt.registerTask('build:dev', [
    'clean:build',
    'sprite:build',
    'less:build'
  ]);
  
  grunt.registerTask('build:dist', [
    'clean',
    'copy',
    'sprite:build',
    'less:dist',
    'ngmin',
    'uglify',
    'useminPrepare',
    'concat',
    'usemin'
  ]);
  
  grunt.registerTask('build', ['build:dev']);
  
};