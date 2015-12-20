'use strict';

/**
 * @ngdoc function
 * @name starterApp.controller:HomeCtrl
 * @description
 */
angular.module('starterApp')
  .controller('HomeCtrl', function($scope, $route, connectApi) {
    $scope.state = $route.current.$$route.state || '';

    $scope.getData = function() {
      connectApi.data().success(function(data) {
        $scope.content = data;
      });
    };

    $scope.getData();
  });