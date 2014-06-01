module.exports = function(config){
  config.set({

    basePath: '../',

    files: [
      'assets/vendor/angular/angular.js',
      'assets/vendor/angular-route/angular-route.js',
      'assets/vendor/angular-mocks/angular-mocks.js',
      '.tmp/public/js/**/*.js',
      '.tmp/test/angular/unit/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['mocha', 'chai'],

    browsers: ['Firefox'],

    reporters: ['progress', 'coverage'],

    plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-coverage',
            'karma-coffee-preprocessor'
            ],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'assets/js/**/*.coffee': ['coffee']
    },

    coverageReporter: {
      type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
      dir: 'coverage/'
    }

  });
};
