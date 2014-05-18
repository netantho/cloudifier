/**
 * Running karma
 *
 * ---------------------------------------------------------------
 *
 * [grunt-karma](https://github.com/karma-runner/grunt-karma)
 *
 * For usage docs see:
 *   https://github.com/karma-runner/grunt-karma
 */
module.exports = function(grunt) {
  grunt.config.set('karma', {
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        autoWatch: false,
        singleRun: true
      }
    }
	});
	grunt.loadNpmTasks('grunt-karma');
};
