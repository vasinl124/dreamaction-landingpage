(function() {
  'use strict';

  angular
    .module('dreamactionLanding')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
  	$scope.animateElementIn = function($el) {
    $el.removeClass('hidden');
    $el.addClass('animated shake'); // this example leverages animate.css classes
  };

  $scope.animateElementOut = function($el) {
    $el.addClass('hidden');
    $el.removeClass('animated shake'); // this example leverages animate.css classes
  };
 
  }
})();
