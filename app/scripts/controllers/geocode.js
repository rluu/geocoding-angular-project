/**
 * Created by rluu on 11/26/14.
 */
'use strict';

/**
 * @ngdoc function
 * @name geocodingAngularProjectApp.controller:GeocodeCtrl
 * @description
 * # AboutCtrl
 * Controller of the geocodingAngularProjectApp
 */
angular.module('geocodingAngularProjectApp')
  .controller('GeocodeCtrl', ['$scope', '$http', function ($scope, $http) {
    //console.log('DEBUG: Constructing the GeocodeCtrl controller!');

    // Country bias for search results.
    // Default is 'US' (United States of America).
    var COUNTRY_BIAS_DEFAULT = 'US';

    //$scope.$watch()
    $scope.cities = [];

    $scope.getLocation = function(val) {
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false,
          region: COUNTRY_BIAS_DEFAULT
        }
      }).then(function(response){
        // Save results.
        $scope.cities = response.data.results;

        return response.data.results.map(function(item){
          //console.log(item);
          return item.formatted_address;
        });
      });
    };

    $scope.$watch('asyncSelected', function() {
      $scope.getLocation($scope.asyncSelected);
    });

  }]);
