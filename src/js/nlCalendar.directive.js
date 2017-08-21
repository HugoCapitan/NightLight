(function() {
  'use strict';

  angular
    .module('NightLight')
    .directive('nlCalendar', nlCalendar);

  nlCalendar.$inject = [];
  function nlCalendar() {
    var directive = {
        bindToController: true,
        controller: nlCalendarController,
        controllerAs: 'vm',
        link: link,
        replace: false,
        restrict: 'E',
        template: TEMPLATES['nlCalendarTemplate.html'],
        scope: {
        }
    };
    return directive;
    
    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function nlCalendarController () {
    let vm = this;

    vm.title = 'CALENDAR';
  }
})();