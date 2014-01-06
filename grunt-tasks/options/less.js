/*jslint es5: true, devel: true, node: true, indent: 2, vars: true, nomen: true */
/*global */

module.exports = {
  build: {
    expand: true,
    cwd: '<%= appFolder %>styles/',
    src: ['**/*.less', '!**/_*.less'],
    dest: '<%= buildFolder %>styles/',
    ext: '.css'
  },
  dist: {
    expand: true,
    cwd: '<%= appFolder %>styles/',
    src: ['**/*.less', '!**/_*.less'],
    dest: '<%= distFolder %>styles/',
    ext: '.css',
    options: {
      yuicompress: true
    }
  }
};

