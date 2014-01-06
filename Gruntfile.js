'use strict';

var fs = require('fs');

function loadConfig(path) {
  var config = {};
 
  fs.readdirSync(path).forEach(function (option) {
    var key = option.replace(/\.js$/, '');
    config[key] = require(path + option);
  });
  
  return config;
}

module.exports = function (grunt) {

  // Project configuration.
  var config = {
    // Metadata.
    tasksFolder : './grunt-tasks/',
    serverFolder: './server/',
    appFolder   : './app/',
    buildFolder : './.build/',
    distFolder  : './dist/',
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>*/\n\n'
  };
  
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks(config.tasksFolder);
  grunt.util._.extend(config, loadConfig(config.tasksFolder + 'options/'));
  
  grunt.initConfig(config);

  // Default task.
  grunt.registerTask('default', ['develop']);

};
