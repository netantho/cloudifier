# jasmine specs for controllers go here

describe 'controllers', ->
  beforeEach(module('cloudifier.controllers'))


  it 'should ....', inject ($controller) ->
    # spec body
    myCtrl1 = $controller 'MyCtrl1', { $scope: {} }
    myCtrl1.should.be.ok;

  it 'should ....', inject ($controller) ->
    # spec body
    myCtrl2 = $controller 'MyCtrl2', { $scope: {} }
    myCtrl2.should.be.ok;
