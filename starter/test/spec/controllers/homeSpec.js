'use strict';

describe('HomeCtrl', function() {
  beforeEach(module('starterApp'));

  var HomeCtrl, scope, route, connectApiMock;

  beforeEach(inject(function($rootScope, $controller){
    route = {
      current: {
        $$route: {
          state: 'test'
        }
      }
    };

    scope = $rootScope.$new();

    connectApiMock = {
      data: function() {
        return {
          success: angular.noop
        };
      }
    };

    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope,
      $route: route,
      connectApi: connectApiMock
    });

    scope.$digest();
  }));

  describe('$scope.getData', function() {
    it('get data', function() {
      spyOn(connectApiMock, 'data').andCallThrough();
      scope.getData();
      expect(connectApiMock.data).toHaveBeenCalled();
    });
  });
});