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
      .state('thankyou', {
        url: '/thankyouforsubscribing',
        templateUrl: 'app/thankyou/partials/thankyou.html',
        controller: 'thankyouCtrl',
        controllerAs: 'thankyou'
      })
    $urlRouterProvider.otherwise('/');
  }

})();
