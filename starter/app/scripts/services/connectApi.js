'use strict';

/**
 * @ngdoc service
 * @name starterApp.connectApi
 * @requires $http, $q
 *
 */
angular.module('starterApp')
  .service('connectApi', function($http, $q) {
    var API_URL = './rest/';

    return {
      /**
       * @ngdoc
       * @name starterApp.connectApi#data
       * @methodOf starterApp.connectApi
       *
       * @description
       * get product(s)
       *
       * @param {number} id od product (optional)
       * @param {object} params of request (optional)
       * @param {object} data of request (optional)
       * @param {boolean} cache for http request
       *
       * @returns {object} $http promise
       */
      data: function(id, params, data, cache) {
        return $http({
            method: 'GET',
            url: API_URL + 'data',
            cache: !!cache,
            data: data,
            params: params
          });
          //.error(this.errorCallback);
      }
    };

  });
