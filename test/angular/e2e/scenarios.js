'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('my app', function() {

  browser.get('/');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).to.eventually.contain("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('/#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText())
        .to.eventually.contain('partial for view 1');
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('/#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText())
        .to.eventually.contain('partial for view 2');
    });

  });
});
