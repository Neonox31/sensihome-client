'use strict';

angular.module('sensihomeClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'btford.socket-io'
  ])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $urlRouterProvider
  .otherwise('/');

  $locationProvider.html5Mode(true);
})

.factory('shSocket', function (socketFactory) {
  return socketFactory({
    ioSocket: io.connect('http://172.16.2.13:4663')
  });
})

.run(function ($rootScope, $location) {
});