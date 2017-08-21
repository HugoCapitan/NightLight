(function() {
  'use strict';
  angular
  .module('App', ['NightLight']);
  angular
    .module('App')
    .controller('IndexController', IndexController);

  IndexController.$inject = [];
  function IndexController () {
    var vm = this;

    activate();

    ////////////////

    function activate() { }
  }
})();