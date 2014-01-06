/*jslint es5: true, devel: true, node: true, indent: 2, vars: true, nomen: true */
/*global */

'use strict';

module.exports = {
  build: {
    src: ['<%= appFolder %>assets/sprites/**/*'],
    destImg: '<%= appFolder %>assets/images/generated/sprites.png',
    destCSS: '<%= appFolder %>styles/generated/_sprites.less',
    engine: 'phantomjs',
    cssFormat: 'less',
    imgPath: '/assets/images/generated/sprites.png',
    algorithm: 'binary-tree',
    cssOpts: {
      cssClass: function (item) {
        return '.sprite-' + item.name;
      }
    }
  }
};
