'use strict';

/**
 * @ngdoc overview
 * @name starterApp
 * @requires synergyCoreApp
 * @requires syngularApp
 * @requires angularFileUpload
 * @description
 * # STACK portal application
 *
 */

angular.module('starterApp', ['ngRoute', 'ngResource', 'ngSanitize', 'ui.bootstrap'])
  .config(function($routeProvider, $httpProvider, $animateProvider) {

    // for rest localhost testing
    //$httpProvider.defaults.useXDomain = true;
    //$httpProvider.defaults.headers.common = 'Content-Type: application/json';
    //delete $httpProvider.defaults.headers.common['X-Requested-With']; // jshint ignore:line

    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        state: 'home'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
