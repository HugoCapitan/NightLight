if(typeof TEMPLATES === 'undefined') {var TEMPLATES = {};}
TEMPLATES['nlCalendarTemplate.html'] = "<div>\n" +
    "  <div uib-datepicker \n" +
    "    ng-model=\"vm.date\" \n" +
    "    datepicker-options=\"vm.calendarOptions\" \n" +
    "    class=\"well well-sm\"    \n" +
    "  ></div>\n" +
    "  <!-- <div uib-datepicker \n" +
    "    ng-model=\"vm.dates[5].date\" \n" +
    "    ng-change=\"vm.departureDateSelected()\" \n" +
    "    datepicker-options=\"vm.departureCalendarOptions\" \n" +
    "    ng-mouseover=\"vm.animateDateSelection($event)\" \n" +
    "    ng-mouseleave=\"vm.animateDateSelection($event, true)\"\n" +
    "    class=\"well well-sm cal-hidden-left\"    \n" +
    "  ></div>     -->\n" +
    "</div>"; 