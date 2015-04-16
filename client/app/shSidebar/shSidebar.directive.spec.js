'use strict';

describe('Directive: shSidebar', function () {

  // load the directive's module and view
  beforeEach(module('sensihomeClientApp'));
  beforeEach(module('app/shSidebar/shSidebar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sh-sidebar></sh-sidebar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the shSidebar directive');
  }));
});