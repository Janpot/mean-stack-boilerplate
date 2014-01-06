/*jslint es5: true, devel: true, node: true, indent: 2, vars: true, nomen: true */
/*global */

module.exports = {
  build: {
    expand: true,
    cwd: '<%= appFolder %>',
    src: ['lib/**/*', 'index.html'],
    dest: '<%= buildFolder %>',
  },
  dist: {
    expand: true,
    cwd: '<%= appFolder %>',
    src: ['index.html', 'partials/**/*', 'assets/**/*', 'i18n/**/*'],
    dest: '<%= distFolder %>',
  }
};
