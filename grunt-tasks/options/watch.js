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
