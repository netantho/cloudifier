module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'assets/vendor/angular/angular.js',
      'assets/vendor/angular-route/angular-route.js',
      'assets/vendor/angular-mocks/angular-mocks.js',
      'assets/js/**/*.js',
      'test/angular/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
