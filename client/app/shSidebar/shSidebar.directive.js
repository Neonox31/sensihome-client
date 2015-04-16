'use strict';

angular.module('sensihomeClientApp')
  .directive('shSidebar', function () {
    return {
      templateUrl: 'app/shSidebar/shSidebar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	scope.data = [
          {
            text: "Dashboards",
            icon: "fa-tachometer",
            open: false,
            data: [
              {
                text: "Salon"
              },
              {
                text: "Cuisine"
              },
              {
                text: "Jardin"
              },
              {
                text: "Test"
              }
            ]
          },
          {
            text: "Users",
            icon: "fa-users"
          }
        ];
      }
    };
  });