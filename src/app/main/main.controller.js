(function() {
  'use strict';

  angular
    .module('dreamactionLanding')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $scope) {
    var vm = this;
  	vm.goToThankyou = function() {
      console.log('gogogo');
      $state.go('thankyou');
    };

  
 
  }
})();
