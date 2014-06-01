# https://github.com/angular/protractor/blob/master/docs/getting-started.md

chai = require 'chai'
chaiAsPromised = require 'chai-as-promised'

chai.use chaiAsPromised
expect = chai.expect

describe 'my app', ->

  browser.get '/'

  it 'should automatically redirect to /view1 when location hash/fragment is empty', ->
    expect(browser.getLocationAbsUrl()).to.eventually.contain '/view1'


  describe 'view1', ->

    beforeEach ->
      browser.get '/#/view1'


    it 'should render view1 when user navigates to /view1', ->
      expect(element.all(By.css('[ng-view] p')).first().getText())
        .to.eventually.contain 'partial for view 1'


  describe 'view2', ->

    beforeEach ->
      browser.get '/#/view2'


    it 'should render view2 when user navigates to /view2', ->
      expect(element.all(By.css('[ng-view] p')).first().getText())
        .to.eventually.contain 'partial for view 2'
