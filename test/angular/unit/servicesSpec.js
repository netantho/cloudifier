'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('cloudifier.services'));


  describe('version', function() {
    it('should return current version', inject(function(version) {
      version.should.equal('0.1');
    }));
  });
});
