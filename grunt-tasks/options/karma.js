module.exports = {
  unit: {
    options: {
      frameworks: ['mocha'],
      reporters: ['progress'],
      files: [
        '<%= appFolder %>lib/chai/chai.js',
        
        '<%= appFolder %>lib/jquery/jquery.js',
        '<%= appFolder %>lib/angular/angular.js',
        '<%= appFolder %>lib/angular-animate/angular-animate.js',
        '<%= appFolder %>lib/angular-route/angular-route.js',
        
        '<%= appFolder %>js/*.js',
        '<%= appFolder %>js/**/*.js',
        
        './test/karma/**/*.js'
      ],
      autoWatch: true,
      browsers: ['Chrome']
    }
  }
};