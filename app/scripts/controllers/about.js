'use strict';

/**
 * @ngdoc function
 * @name sensihomeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sensihomeApp
 */
angular.module('sensihomeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
