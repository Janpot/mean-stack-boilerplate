/*jslint es5: true, devel: true, node: true, indent: 2, vars: true, nomen: true */
/*global */

module.exports = {
  build: {
    expand: true,
    cwd: '<%= buildFolder %>js/',
    src: ['**/*.js'],
    dest: '<%= buildFolder %>js/',
    ext: '.js'
  }
};
