'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('cloudifier.filters'));


  describe('interpolate', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));


    it('should replace VERSION', inject(function(interpolateFilter) {
      interpolateFilter('before %VERSION% after').should.equal('before TEST_VER after');
    }));
  });
});
