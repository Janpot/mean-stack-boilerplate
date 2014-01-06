module.exports = {
  html: '<%= buildFolder %>index.html',
  options: {
    staging: '<%= buildFolder %>',
    dest: '<%= distFolder %>',
    flow: {
      steps: {'js' : ['concat', 'uglifyjs'] },
      post: []
    }
  }
};
