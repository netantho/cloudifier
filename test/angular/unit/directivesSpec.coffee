# jasmine specs for directives go here

describe 'directives', ->
  beforeEach(module('cloudifier.directives'))

  describe 'app-version', ->
    it 'should print current version', ->
      module ($provide) ->
        $provide.value 'version', 'TEST_VER'
        null

      inject ($compile, $rootScope) ->
        element = $compile('<span app-version></span>')($rootScope)
        element.text().should.equal 'TEST_VER'
