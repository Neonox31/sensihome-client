'use strict';

/**
 * @ngdoc function
 * @name sensihomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sensihomeApp
 */
angular.module('sensihomeClientApp')
  .controller('MainCtrl', function ($scope, shSocket) {
  	shSocket.emit('get-plugins', function(res) {
  		console.log(res);
	});
  });
