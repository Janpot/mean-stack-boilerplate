module.exports = {
  build: {
    expand: true,
    cwd: '<%= appFolder %>js/',
    src: ['**/*.js'],
    dest: '<%= buildFolder %>js/',
    ext: '.js'
  }
};
