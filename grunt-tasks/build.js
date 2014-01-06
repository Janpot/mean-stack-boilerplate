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
    'useminPrepare',
    'concat',
    'uglify',
    'usemin'
  ]);
  
  grunt.registerTask('build', ['build:dev']);
  
};