'use strict';

/**
 * @ngdoc function
 * @name starterApp.directive:classRoute
 * @description
 * set class attr in body DOM element
 */
angular.module('starterApp')
  .directive('classRoute', function($rootScope, $route) {
    return function(scope, elem, attr) {
      var previousClass = '', route;

      $rootScope.$on('$routeChangeSuccess', function(event, currentRoute) {
        route = currentRoute.$$route;

        if (previousClass) {
          elem.removeClass(previousClass);
        }
        if (route) {
          previousClass = route['class'] || '';
          elem.addClass(previousClass);
        }
      });
    };

  });
