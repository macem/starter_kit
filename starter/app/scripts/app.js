'use strict';

/**
 * @ngdoc overview
 * @name starterApp
 * @description
 * # starter application
 *
 */

angular.module('starterApp', ['ngRoute', 'ngResource', 'ngSanitize', 'ui.bootstrap'])
  .config(function($compileProvider, $routeProvider, $httpProvider, $animateProvider) {

    // for rest localhost testing
    //$httpProvider.defaults.useXDomain = true;
    //$httpProvider.defaults.headers.common = 'Content-Type: application/json';
    //delete $httpProvider.defaults.headers.common['X-Requested-With']; // jshint ignore:line

    $compileProvider.debugInfoEnabled(false);

    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        state: 'home'
      })
      .when('/packages', {
        templateUrl: 'views/packages.html',
        controller: 'HomeCtrl',
        state: 'packages'
      })
      .when('/lorem', {
        templateUrl: 'views/lorem.html',
        controller: 'HomeCtrl',
        state: 'lorem'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
