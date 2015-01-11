/**
 * Created by rluu on 11/26/14.
 */
'use strict';


/*
angular.module('geocodingAngularProjectApp')
        .factory('ForecastService', ['$resource', function($resource) {
            return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?q=:city&cnt=5');
        }]);
*/

angular.module('geocodingAngularProjectApp')
        .filter('temperature', function() {
            var toCelsius = function(kelvin) {
                return kelvin - 273.15;
            };
            var toFahrenheit = function(kelvin) {
                return (toCelsius(kelvin) * (9.0 / 5.0)) + 32.0;
            };

            return function(kelvin, units) {
                switch (units) {
                    case 'imperial':
                        return toFahrenheit(kelvin);
                    case 'metric':
                        return toCelsius(kelvin);
                    default:
                        console.error('Unknown unit type for weather temperature.');
                        //return input;
                        return '';
                }
            };
        });


angular.module('geocodingAngularProjectApp')
        .filter('cityid', function() {
            var toStateProvince = function(cityid) {
              // TODO: Enter some code here.
                return cityid;
            };
  // TODO: Remove/fix this method.
            return function() {
            };
        });


/**
 * @ngdoc function
 * @name geocodingAngularProjectApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the geocodingAngularProjectApp
 */
angular.module('geocodingAngularProjectApp')
  .controller('WeatherCtrl', ['$scope', '$http', '$resource', function ($scope, $http, $resource) {
    console.log('Constructing the WeatherCtrl controller!');

    $scope.units = 'imperial';
                                                   
    //$scope.$watch()
    $scope.cities = [];
    $scope.forecast = [];
                                                   
    $scope.updateForecast = function() {
      console.log('DEBUG: Inside $scope.updateForecast.  City is currently: ' + $scope.city);
      
      // TODO: Uncomment the below when I know the function callbacks are working.
      $scope.forecast = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?q=:city&cnt=5').get({city : $scope.city});
      //$scope.forecast = ForecastService.get({
      //  city: $scope.city
      //});


      console.log('$scope.forecast is currently: ' + $scope.forecast);
      if ($scope.forecast !== undefined && $scope.forecast.list !== undefined) {
        console.log('Length of the forecast is: ' +
                    $scope.forecast.list.length);
        for (var day in $scope.forecast.list) {
          console.log('Day: ' + day);
        }
      }

      //return $scope.forecast;
      
      
    };


  $scope.$watch($scope.city, function(newValue, oldValue) {
    console.log('Information changed here. oldValue was: ' + oldValue + ', and newValue is: ' + newValue);
    if (newValue !== '' && newValue !== oldValue) {
      console.log('Calling $scope.updateForecast())');
      $scope.updateForecast();
    }
  });

    console.log('Inside controller.  City is currently: ' + $scope.city);

  }]);
