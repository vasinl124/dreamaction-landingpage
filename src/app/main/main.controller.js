(function() {
  'use strict';

  angular
    .module('dreamactionLanding')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $state) {
    $scope.goConversionPage = function () {
      $state.go('inspire');
    }
  }
})();
