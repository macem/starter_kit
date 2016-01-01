'use strict';

/**
 * @ngdoc controller
 * @name starterApp.controller:HomeCtrl
 * @description
 * Home page
 */
angular.module('starterApp')
  .controller('HomeCtrl', function($scope, $route, $uibModal, connectApi) {
    $scope.state = $route.current.$$route.state || '';

    $scope.accordion = true;

    $scope.alerts = [];

    $scope.slides = [{
        text: 'Cats',
        image: 'images/slides/cat_1.jpg'
      },
      {
        text: 'Kittys',
        image: 'images/slides/cat_2.jpg'
      },
      {
        text: 'Felines',
        image: 'images/slides/cat_3.jpg'
      },
      {
        text: 'Cutes',
        image: 'images/slides/cat_4.jpg'
      },
      {
        text: 'Kittys',
        image: 'images/slides/cat_5.jpg'
      }];

    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    $scope.tabs = [{
        title: 'Tab 1 with content',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis explicabo ipsa quidem hic neque, ratione, tenetur voluptates rem eius iste ex modi voluptas doloribus error nemo, quos dicta maiores atque.'
      }, {
        title: 'Tab 2 with content',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      }];

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.status = {
      opened: false
    };

    $scope.openModal = function(size) {
      $uibModal.open({
        templateUrl: 'myModalContent.html'
      });
    };

    $scope.addAlert = function() {
      $scope.alerts.push({
        text: 'Lorem ipsum dolor sit amet'
      });
    };

    $scope.getData = function() {
      connectApi.data().success(function(data) {
        $scope.content = data;
      });
    };

    $scope.getData();
  });