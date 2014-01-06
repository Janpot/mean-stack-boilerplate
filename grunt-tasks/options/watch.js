/*jslint es5: true, devel: true, node: true, indent: 2, vars: true, nomen: true */
/*global */

module.exports = {
  less: {
    files: '<%= appFolder %>**/*.less',
    tasks: ['less:build']
  },
  sprites: {
    files: '<%= appFolder %>assets/sprites/**/*',
    tasks: ['sprite:build']
  }
};
