module.exports = {
  build: {
    expand: true,
    cwd: '<%= buildFolder %>js/',
    src: ['**/*.js'],
    dest: '<%= buildFolder %>js/',
    ext: '.min.js'
  }
};
