(function() {
  'use strict';

  angular
    .module('dreamactionLanding')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
