'use strict';
/**
 * @ngdoc function
 * @name dreamactionLanding.controller:thankyouCtrl
 * @description
 * # thankyouCtrl
 * Controller of the dreamactionLanding
 */
angular.module('dreamactionLanding')
  .controller('thankyouCtrl', function ($scope, $window, $timeout) {
    $scope.redirect = function(){
    	$window.open('assets/GetADreamJobToolkit.zip', '_blank', '');
    	$window.location.href = 'http://dreamaction.co'
    }
  });
