module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'assets/vendor/angular/angular.js',
      'assets/vendor/angular-route/angular-route.js',
      'assets/vendor/angular-mocks/angular-mocks.js',
      '.tmp/public/js/**/*.js',
      '.tmp/test/angular/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['mocha', 'chai'],

    browsers : ['Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
