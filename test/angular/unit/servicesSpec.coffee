# jasmine specs for services go here

describe 'service', ->
  beforeEach(module('cloudifier.services'))


  describe 'version', ->
    it 'should return current version', inject (version) ->
