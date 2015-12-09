(function() {
  'use strict';

  angular
    .module('dreamactionLanding')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('inspire', {
        url: '/inspire',
        templateUrl: 'app/conversionpage/partials/conversionpage.html',
        controller: 'conversionpageCtrl',
        controllerAs: 'conversionpage'
      })
    $urlRouterProvider.otherwise('/');
  }

})();
