/**
 * @ngdoc directive
 * @name patternfly.charts.directive:pfUtilizationDonut
 * @restrict E
 *
 * @description
 *   Component for rendering a utilization bar chart
 *   There are three possible fill colors for Used Percentage, dependent on whether or not there are thresholds:<br/>
 *   <ul>
 *   <li>When no thresholds exist, or if the used percentage has not surpassed any thresholds, the indicator is blue.
 *   <li>When the used percentage has surpassed the warning threshold, but not the error threshold, the indicator is orange.
 *   <li>When the used percentage has surpassed the error threshold, the indicator is is red.
 *   </ul>
 *
 * @param {object} chartData the data to be shown in the utilization bar chart<br/>
 * <ul style='list-style-type: none'>
 * <li>.used          - number representing the amount used
 * <li>.total         - number representing the total amount
 * <li>.dataAvailable - Flag if there is data available - default: true
 * </ul>
 *
 * @param {object=} chart-title The title displayed on the left-hand side of the chart
 * @param {object=} chart-footer The label displayed on the right-hand side of the chart.  If chart-footer is not
 * specified, the automatic footer-label-format will be used.
 * @param {object=} layout Various alternative layouts the utilization bar chart may have:<br/>
 * <ul style='list-style-type: none'>
 * <li>.type - The type of layout to use.  Valid values are 'regular' (default) displays the standard chart layout,
 * and 'inline' displays a smaller, inline layout.</li>
 * <li>.titleLabelWidth - Width of the left-hand title label when using 'inline' layout. Example values are "120px", "20%", "10em", etc..</li>
 * <li>.footerLabelWidth - Width of the right-hand used label when using 'inline' layout. Example values are "120px", "20%", "10em", etc..</li>
 * </ul>
 * @param {string=} footer-label-format The auto-format of the label on the right side of the bar chart when chart-footer
 * has not been specified. Values may be:<br/>
 * <ul style='list-style-type: none'>
 * <li>'actual' - (default) displays the standard label of '(n) of (m) (units) Used'.
 * <li>'percent' - displays a percentage label of '(n)% Used'.</li>
 * </ul>
 * @param {object=} units to be displayed on the chart. Examples: "GB", "MHz", "I/Ops", etc...
 * @param {string=} threshold-error The percentage used, when reached, denotes an error.  Valid values are 1-100. When the error threshold
 * has been reached, the used donut arc will be red.
 * @param {string=} threshold-warning The percentage usage, when reached, denotes a warning.  Valid values are 1-100. When the warning threshold
 * has been reached, the used donut arc will be orange.
 *
 * @example
 <example module="patternfly.example">
   <file name="index.html">
     <div ng-controller="ChartCtrl">
     <div class="row">
       <div class="col-md-3 text-center">
         <label>Error Threshold</label>
         <pf-utilization-donut-chart chart-data="dataErr" chart-title="titleErr" layout="" units="unitsErr" threshold-error="thresholdErrorErr" threshold-warning="thresholdWarningErr" center-label="labelErr" center-label-only="true"></pf-utilization-donut-chart>
       </div>
       <div class="col-md-3 text-center"">
         <label>Warning Threshold</label>
         <pf-utilization-donut-chart chart-data="dataWarn" chart-title="titleWarn" layout="" units="unitsWarn" threshold-error="thresholdErrorWarn" threshold-warning="thresholdWarningWarn" center-label="labelWarn" center-label-only="true"></pf-utilization-donut-chart>
       </div>
       <div class="col-md-3 text-center"">
         <label class="camelcase">{{threshLabel}} Threshold</label>
         <pf-utilization-donut-chart chart-data="dataDynamic" chart-title="titleDynamic" layout="" units="unitsDynamic" threshold-error="thresholdErrorDynamic" threshold-warning="thresholdWarningDynamic" center-label="labelDynamic" center-label-only="true" on-threshold-change="thresholdChanged(threshold)"></pf-utilization-donut-chart>
       </div>
       <div class="col-md-3 text-center"">
         <label>No Threshold</label>
         <pf-utilization-donut-chart chart-data="dataNoThresh" units="unitsNoThresh" center-label-only="true"></pf-utilization-donut-chart>
         </div>
       </div>

       <label class="label-title">Default Layout, no Thresholds</label>
       <br>
       <pf-utilization-donut-chart chart-data="data1" units="units1"></pf-utilization-donut-chart>
       <br>

       <label class="label-title">Inline Layouts with Error, Warning, and Ok Thresholds</label>
       <br>
       <pf-utilization-donut-chart chart-data="data5" chart-title="title5" layout="layoutInline" units="units5" threshold-error="85" threshold-warning="60" center-label="'percent'" center-label-only="true">../utilization-trend/utilization-trend-chart-directive.js</pf-utilization-donut-chart>
       <pf-utilization-donut-chart chart-data="data3" chart-title="title3" layout="layoutInline" units="units3" threshold-error="85" threshold-warning="60" center-label="'percent'" center-label-only="true"></pf-utilization-donut-chart>
       <pf-utilization-donut-chart chart-data="data2" chart-title="title2" layout="layoutInline" units="units2" threshold-error="85" threshold-warning="60" center-label="'percent'" center-label-only="true"></pf-utilization-donut-chart>
       <br>

       <label class="label-title">layout='inline', footer-label-format='percent', and custom chart-footer labels</label>
       <br>
       <pf-utilization-donut-chart chart-data="data2" chart-title="title2" layout="layoutInline" units="units2" threshold-error="85" threshold-warning="60" center-label="'percent'" center-label-only="true"></pf-utilization-donut-chart>
       <pf-utilization-donut-chart chart-data="data3" chart-title="title3" layout="layoutInline" units="units3" threshold-error="85" threshold-warning="60" center-label="'percent'" center-label-only="true"></pf-utilization-donut-chart>
       <pf-utilization-donut-chart chart-data="data4" chart-title="title4" layout="layoutInline" units="units4" threshold-error="85" threshold-warning="60" center-label="'percent'" center-label-only="true"></pf-utilization-donut-chart>
       <pf-utilization-donut-chart chart-data="data5" chart-title="title5" layout="layoutInline" units="units5" threshold-error="85" threshold-warning="60" center-label="'percent'" center-label-only="true"></pf-utilization-donut-chart>

       <div class="row">
         <div class="col-md-6">
           <form role="form"">
             <div class="form-group">
               <label class="checkbox-inline">
                 <input type="checkbox" ng-model="data1.dataAvailable">Data Available</input>
               </label>
             </div>
           </form>
         </div>
       </div>
     </div>
   </file>

   <file name="script.js">
     angular.module( 'patternfly.example', ['patternfly.charts', 'patternfly.card']);

     angular.module( 'patternfly.example' ).controller( 'ChartCtrl', function( $scope, $interval ) {

       $scope.layoutInline = {
        'type': 'inline'
       };

       $scope.dataErr = {
         'used': '950',
         'total': '1000'
       };
       $scope.titleErr = '';
       $scope.unitsErr = 'GB';
       $scope.thresholdErrorErr = '90';
       $scope.thresholdWarningErr = '90';
       $scope.labelErr = undefined;

       $scope.dataWarn = {
         'used': '650',
         'total': '1000'
       };
       $scope.titleWarn = '';
       $scope.unitsWarn = 'GB';
       $scope.thresholdErrorWarn = '90';
       $scope.thresholdWarningWarn = '60';
       $scope.labelWarn = undefined;

       $scope.dataDynamic = {
         'used': '550',
         'total': '1000'
       };
       $scope.titleDynamic = '';
       $scope.unitsDynamic = 'GB';
       $scope.thresholdErrorDynamic = '90';
       $scope.thresholdWarningDynamic = '60';
       $scope.labelDyanmic = 'used';

       $scope.thresholdChanged = function(threshold) {
          $scope.threshLabel = threshold;
       };

       $interval(function () {
         $scope.dataDynamic.used = Number($scope.dataDynamic.used) + 40;
         if ($scope.dataDynamic.used > 1000) {
           $scope.dataDynamic.used = 10;
         }

         if ($scope.dataDynamic.used < 500) {
           $scope.labelDynamic = 'used';
         } else {
           $scope.labelDynamic = 'percent';
         }
       }, 1000);

       $scope.dataNoThresh = {
         'used': '750',
         'total': '1000'
       };
       $scope.unitsNoThresh = 'GB';

       $scope.ChartErr = {};

      $scope.title1 = 'RAM Usage';
      $scope.units1 = 'MB';
      $scope.data1 = {
        'dataAvailable': true,
        'used': '8',
        'total': '24'
      };

      $scope.title2      = 'Memory';
      $scope.units2      = 'GB';
      $scope.data2 = {
        'dataAvailable': true,
        'used': '25',
        'total': '100'
      };

      $scope.title3 = 'CPU Usage';
      $scope.units3 = 'MHz';
      $scope.data3 = {
        'dataAvailable': true,
        'used': '420',
        'total': '500'
      };

      $scope.title4 = 'Disk Usage';
      $scope.units4 = 'TB';
      $scope.data4 = {
        'dataAvailable': true,
        'used': '350',
        'total': '500'
      };

      $scope.title5 = 'Disk I/O';
      $scope.units5 = 'I/Ops';
      $scope.data5 = {
        'dataAvailable': true,
        'used': '450',
        'total': '500'
      };

      $interval(function () {
        $scope.data5.used = Number($scope.data5.used) + 40;
        if ($scope.data5.used > 500) {
          $scope.data5.used = 10;
        }
      }, 1000);

      $scope.footer1 = '<strong>500 TB</strong> Total';
      $scope.footer2 = '<strong>450 of 500</strong> Total';

     });
   </file>
 </example>
*/

angular.module('patternfly.charts').component('pfUtilizationDonutChart', {
  bindings: {
    chartData: '<',
    chartTitle: '<?',
    chartFooter: '<?',
    units: '<',
    thresholdError: '<?',
    thresholdWarning: '<?',
    footerLabelFormat: '@?',
    layout: '<?',
    onThreshholdChange: '&?',
    centerLabel: '<?',
    centerLabelOnly: '<?'
    //centerLabelFn: '&?'


    //chartData: '<',
    //config: '<',
    //centerLabel: '<?',
    //chartHeight: '<?',
    //chartTitle: '<',
    //chartFooter: '<',
    //units: '<?'
    //thresholdError: '<?',
    //thresholdWarning: '<?',
    //footerLabelFormat: '@?',
    //layout: '=?'


    //data: '<',
    //chartHeight: '<?',
    //centerLabel: '<?',
    //onThresholdChange: '&'

    //chartData: '<',
    //config: '<',
    //centerLabel: '<?',
    //donutConfig: '<',
    //sparklineConfig: '<',
    //sparklineChartHeight: '<?',
    //showSparklineXAxis: '<?',
    //showSparklineYAxis: '<?'

    //chartData: '=',
    //chartTitle: '=',
    //chartFooter: '=',
    //units: '=',
    //thresholdError: '=?',
    //thresholdWarning: '=?',
    //footerLabelFormat: '@?',
    //layout: '=?'
  },

  templateUrl: 'charts/utilization-donut/utilization-donut-chart.html',
  controller: function ($scope, $timeout) {
    'use strict';
    var ctrl = this, prevChartData, prevLayout;

    ctrl.$id = $scope.$id;
    ctrl.chartDataTotal = null;
    ctrl.chartDataUsed = null;
    ctrl.chartDataAvailable = null;

    //ctrl.custLayout = {
    //  'type': 'inline'
    //};

    ctrl.config = {
      chartId: '_' + ctrl.$id,
      units: ctrl.units
      /*thresholds: {
        warning: ctrl.thresholdWarning || null,
        error: ctrl.thresholdError || null
      }*//*,
      centerLabelFn: function () {
        eval('console.log(ctrl.chartData)');
        ctrl.chartDataTotal = ctrl.chartData.total;
        ctrl.chartDataUsed = ctrl.chartData.used;
        ctrl.chartDataAvailable = ctrl.chartData.available;

        if (ctrl.centerLabelOnly === true) {
          return ctrl.chartData.used + ' ' + ctrl.units;
        }
      }*/
      /*,centerLabelFn: function () {
        eval('console.log(ctrl.chartData)');
        //return ctrl.chartData.available + ' ' + ctrl.units;
        return ctrl.chartData.used + ' ' + ctrl.units;
      }*/
    };

    /*if (ctrl.centerLabelOnly === true) {
      ctrl.config.centerLabelFn = function () {
        return ctrl.chartData.used + ' ' + ctrl.units;
      };
    }*/

    /*if (angular.isFunction(ctrl.centerLabelFn)) {
      ctrl.config.centerLabelFn = function () {
        return ctrl.centerLabelFn.call(ctrl.chartData);
      };
    }*/

    ctrl.$onChanges = function (changesObj) {
      if (changesObj.thresholdWarning || changesObj.thresholdError) {
        ctrl.config.thresholds = {
          warning: ctrl.thresholdWarning || null,
          error: ctrl.thresholdError || null
        };
      }

      if (changesObj.chartData && ctrl.chartData) {
        ctrl.chartDataTotal = ctrl.chartData.total;
        ctrl.chartDataUsed = ctrl.chartData.used;
        ctrl.chartDataAvailable = ctrl.chartData.available;
        //ctrl.updateAll();
        //eval("console.log('inside=', ctrl.chartData, changesObj.chartData, changesObj.chartData.total)");
      }

      if (changesObj.centerLabelOnly && ctrl.centerLabelOnly === true) {
        ctrl.config.centerLabelFn = function () {
          ctrl.chartDataTotal = ctrl.chartData.total;
          ctrl.chartDataUsed = ctrl.chartData.used;
          ctrl.chartDataAvailable = ctrl.chartData.available;
          return ctrl.chartData.used + ' ' + ctrl.units;
        };
      }

      //eval("console.log('outside=', ctrl.chartData, changesObj)");
    };

    /*ctrl.$doCheck = function (a,b,c) {
      // do a deep compare on chartData and layout
      //if (!angular.equals(ctrl.chartData, prevChartData) || !angular.equals(ctrl.layout, prevLayout)) {
        //ctrl.updateAll();
      //}
      eval("console.log('DOCHECK outside=', ctrl.chartData)");
    };*/

    /*ctrl.custConfig = {
      'chartId': '_' + ctrl.$id,
      'units': 'GB',
      'thresholds':{'warning':'60','error':'90'}
    };*/

    //ctrl.custData = {
      //'used': '350',
      //'total': '1000'
    //};

    //eval('console.log("data= "+ctrl.custData)');

    /*
    ctrl.custData = {
      'dataAvailable': true,
      'used': '670',
      'total': '1000'
    };

    ctrl.custConfig = {
      //'chartId': 'custChart',
      'units': 'MHz',
      'thresholds':{'warning':'60','error':'90'},
      "legend":{"show":true},
      'tooltipFn': function (d) {
        return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
          d[0].value + ' ' + d[0].name +
          '</span>';
      },
      'centerLabelFn': function () {
        return ctrl.custData.available + " GB";
      },
      'onClickFn': function (d, i) {
        alert("You Clicked On The Donut!");
      }
    };*/

    //ctrl.custLabel = "percent";

    /*ctrl.updateAll = function () {
      // Need to deep watch changes
      prevChartData = angular.copy(ctrl.chartData);
      prevLayout = angular.copy(ctrl.layout);

      //Calculate the percentage used
      ctrl.chartData.percentageUsed = Math.round(100 * (ctrl.chartData.used / ctrl.chartData.total));

      if (ctrl.thresholdError || ctrl.thresholdWarning) {
        ctrl.isError = (ctrl.chartData.percentageUsed >= ctrl.thresholdError);
        ctrl.isWarn  = (ctrl.chartData.percentageUsed >= ctrl.thresholdWarning && ctrl.chartData.percentageUsed < ctrl.thresholdError);
        ctrl.isOk    = (ctrl.chartData.percentageUsed < ctrl.thresholdWarning);
      }

      //Animate in the chart load.
      ctrl.animate = true;
      $timeout(function () {
        ctrl.animate = false;
      }, 0);
    };

    ctrl.$onChanges = function (changesObj) {
      ctrl.updateAll();
    };

    ctrl.$doCheck = function () {
      // do a deep compare on chartData and layout
      if (!angular.equals(ctrl.chartData, prevChartData) || !angular.equals(ctrl.layout, prevLayout)) {
        ctrl.updateAll();
      }
    };*/
  }
});
