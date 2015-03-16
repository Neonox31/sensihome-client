'use strict';

/**
 * @ngdoc function
 * @name sensihomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sensihomeApp
 */
angular.module('sensihomeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
