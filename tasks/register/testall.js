module.exports = function (grunt) {
  grunt.registerTask('testall', [
    'mochaTest',
    'karma'
  ]);
};
