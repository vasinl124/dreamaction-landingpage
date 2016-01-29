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
    	$timeout(function(){
    		$window.location.href = 'http://dreamaction.co'
    	},5000)
    	
    }
  });
