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
