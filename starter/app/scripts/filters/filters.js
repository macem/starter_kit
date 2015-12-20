'use strict';

/**
 * @ngdoc function
 * @name starterApp.filter:filterobject
 * @description
 * return names from simple object
 */
angular.module('starterApp')
  .filter('filterObject', function() {
    return function(item) {
      return item ? item.label : '';
    };
  });

/**
 * @ngdoc function
 * @name starterApp.filter:filterDate
 * @description
 * return names from simple array objects
 */
angular.module('starterApp')
  .filter('filterDate', function($filter) {
    return function(date) {
      return $filter('date')(new Date(date), 'MM-d-yyyy h:mm:ss');
    };
  });