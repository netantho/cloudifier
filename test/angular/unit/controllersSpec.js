'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('cloudifier.controllers'));


  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl1 = $controller('MyCtrl1', { $scope: {} });
    myCtrl1.should.be.ok;
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl2 = $controller('MyCtrl2', { $scope: {} });
    myCtrl2.should.be.ok;
  }));
});
