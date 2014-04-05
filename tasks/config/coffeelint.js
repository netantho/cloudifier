/**
 * Lint coffee source files.
 *
 * ---------------------------------------------------------------
 *
 * [grunt-coffeelint](https://github.com/vojtajina/grunt-coffeelint)
 *
 * For usage docs see:
 * 		https://github.com/vojtajina/grunt-coffeelint
 */
module.exports = function(grunt) {
	grunt.config.set('coffeelint', {
	     app: ['api/**/*.coffee']
	});

	grunt.loadNpmTasks('grunt-coffeelint');
};
