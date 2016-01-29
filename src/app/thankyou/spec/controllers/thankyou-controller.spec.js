'use strict';
describe('Controller: thankyouCtrl', function () {
// load the controller's module
  beforeEach(module('dreamactionLanding'));
  var thankyouCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    thankyouCtrl = $controller('thankyouCtrl', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
