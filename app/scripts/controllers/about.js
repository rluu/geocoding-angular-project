'use strict';

/**
 * @ngdoc function
 * @name geocodingAngularProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the geocodingAngularProjectApp
 */
angular.module('geocodingAngularProjectApp')
  .controller('AboutCtrl', function ($scope) {
    console.log('Constructing the AboutCtrl controller!');

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
