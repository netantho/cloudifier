/**
 * Running mocha specs in a headless browser (PhantomJS)
 *
 * ---------------------------------------------------------------
 *
 * [grunt-mocha](https://github.com/kmiyashiro/grunt-mocha)
 *
 * For usage docs see:
 *   https://github.com/kmiyashiro/grunt-mocha
 */
module.exports = function(grunt) {
	grunt.config.set('mochaTest', {
		test: {
      options: {
        reporter: 'spec',
        require: [
          'coffee-script/register',
          'coverage/blanket'
        ]
      },
      src: ['test/sails/**/*.coffee']
    },
    coverage: {
      options: {
        reporter: 'mocha-lcov-reporter',
        // use the quiet flag to suppress the mocha console output
        quiet: true,
        // specify a destination file to capture the mocha
        // output (the quiet option does not suppress this)
        captureFile: 'coverage/sails-lcov.info',
        require: [
          'coffee-script/register',
        ]
      },
      src: ['test/sails/controllers/*.coffee']
    }
	});
	grunt.loadNpmTasks('grunt-mocha-test');
};
