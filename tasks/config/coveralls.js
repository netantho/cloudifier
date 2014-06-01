/**
 * Send lcov file to coveralls to report code coverage
 *
 * For usage docs see:
 *    https://github.com/pimterry/grunt-coveralls
 */
module.exports = function(grunt) {

  grunt.config.set('coveralls', {
    options: {
      // LCOV coverage file relevant to every target
      src: 'coverage/sails-lcov.info',

      // When true, grunt-coveralls will only print a warning rather than
      // an error, to prevent CI builds from failing unnecessarily (e.g. if
      // coveralls.io is down). Optional, defaults to false.
      force: false
    }
  });

  grunt.loadNpmTasks('grunt-coveralls');
};
