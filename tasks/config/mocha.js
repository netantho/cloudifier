/**
 * Running mocha specs in a headless browser (PhantomJS)
 *
 * ---------------------------------------------------------------
 *
 * [grunt-mocha](https://github.com/kmiyashiro/grunt-mocha)
 *
 * For usage docs see:
 * 		https://github.com/kmiyashiro/grunt-mocha
 */
module.exports = function(grunt) {
	grunt.config.set('mochaTest', {
		test: {
        	options: {
          		reporter: 'spec',
          		require: 'coffee-script/register'
        	},
        	src: ['test/sails/**/*.coffee']
      }
	});
	grunt.loadNpmTasks('grunt-mocha-test');
};
