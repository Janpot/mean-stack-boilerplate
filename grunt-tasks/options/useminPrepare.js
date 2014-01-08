'use strict';

module.exports = {
  html: '<%= buildFolder %>index.html',
  options: {
    staging: '<%= buildFolder %>',
    dest: '<%= distFolder %>',
    flow: {
      steps: {
        js : [
          {
            name: 'get-min',
            createConfig: function (context) {
              // change extension to .min.js
              
              context.outDir = context.inDir;
              context.outFiles = context.inFiles.map(function (f) {
                return f.replace(/\.js$/, '.min.js');
              });
              return { files: context.outFiles };
            }
          },
          'concat'
        ]
      },
      post: []
    }
  }
};
