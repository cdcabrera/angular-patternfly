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
         <p>
           <pf-utilization-donut-chart chart-data="dataErr" chart-size="85" center-units="centerUnitsErr" center-label="centerLabelErr" center-units-only="true" threshold-error="thresholdErrorErr" threshold-warning="thresholdWarningErr"></pf-utilization-donut-chart>
         </p>
       </div>
       <div class="col-md-3 text-center"">
         <label>Warning Threshold</label>
         <p>
           <pf-utilization-donut-chart chart-data="dataWarn" chart-size="85" center-units="centerUnitsWarn" center-label="centerLabelWarn" center-units-only="true" threshold-error="thresholdErrorWarn" threshold-warning="thresholdWarningWarn"></pf-utilization-donut-chart>
         </p>
       </div>
       <div class="col-md-3 text-center"">
         <label class="camelcase">{{threshLabel}} Threshold</label>
         <p>
           <pf-utilization-donut-chart chart-data="dataDynamic" chart-size="85" center-units="centerUnitsDynamic" center-label="centerLabelDynamic" center-units-only="true" label-units="labelUnitsDynamic" threshold-error="thresholdErrorDynamic" threshold-warning="thresholdWarningDynamic" on-threshold-change="thresholdChanged(threshold)"></pf-utilization-donut-chart>
         </p>
       </div>
       <div class="col-md-3 text-center"">
         <label>No Threshold</label>
         <p>
           <pf-utilization-donut-chart chart-data="dataNoThresh" chart-size="85" center-units="centerUnitsNoThresh" center-units-only="true"></pf-utilization-donut-chart>
         </p>
       </div>

       <div class="col-md-12">
         <hr>
       </div>

       <div class="row">
         <div class="col-md-3 text-center">
           <label>center-label = 'used'</label>
           <p>
             <pf-utilization-donut-chart chart-data="dataUsed" chart-size="130" center-units="centerUnitsUsed" center-label="centerLabelUsed" label-label="labelLabelUsed"></pf-utilization-donut-chart>
           </p>
         </div>
         <div class="col-md-3 text-center">
           <label>center-label = 'available'</label>
           <p>
             <pf-utilization-donut-chart chart-data="dataAvail" chart-size="130" center-units="centerUnitsAvail" center-label="centerLabelAvail" threshold-error="thresholdErrorDynamic" threshold-warning="thresholdWarningDynamic"></pf-utilization-donut-chart>
           </p>
         </div>
         <div class="col-md-3 text-center">
           <label>center-label = 'percent'</label>
           <p>
             <pf-utilization-donut-chart chart-data="dataPct" chart-size="130" center-label="centerLabelPct" label-units="labelUnitsPct"></pf-utilization-donut-chart>
           </p>
         </div>
         <div class="col-md-3 text-center">
           <label>center-label = 'none'</label>
           <p>
             <pf-utilization-donut-chart chart-data="dataNone" chart-size="130" center-units="centerUnitsNone" center-label="centerLabelNone" center-units-only="true" threshold-error="thresholdErrorDynamic" threshold-warning="thresholdWarningDynamic"></pf-utilization-donut-chart>
           </p>
         </div>
       </div>
       <div class="col-md-12">
         <hr>
       </div>
       <div class="container-fluid">
         <div class="row">
           <div class="col-md-3">
             <form role="form"">
               <div class="form-group">
                 <label class="checkbox-inline">
                   <input type="checkbox" ng-model="dataAvailable"/>Data Available
                 </label>
               </div>
             </form>
           </div>
           <div class="col-md-3">
             <form role="form" >
               <div class="form-group">
                 <label>Chart Height</label>
                 <br>
                 <input style="height:25px; width:60px;" type="number" ng-model="custChartHeight"/>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   </file>

   <file name="script.js">
     angular.module( 'patternfly.example', ['patternfly.charts', 'patternfly.card']);

     angular.module( 'patternfly.example' ).controller( 'ChartCtrl', function( $scope, $interval ) {

       $scope.dataAvailable = true;

       $scope.layoutInline = {
        'type': 'inline'
       };

       $scope.dataErr = {
         'used': '950',
         'total': '1000'
       };
       $scope.centerUnitsErr = 'MB';
       $scope.centerLabelErr = 'used';
       $scope.thresholdErrorErr = '90';
       $scope.thresholdWarningErr = '90';

       $scope.dataWarn = {
         'used': '650',
         'total': '1000'
       };
       $scope.centerUnitsWarn = 'GB';
       $scope.centerLabelWarn = 'used';
       $scope.thresholdErrorWarn = '90';
       $scope.thresholdWarningWarn = '60';

       $scope.dataDynamic = {
         'used': '550',
         'total': '1000'
       };
       $scope.centerUnitsDynamic = 'MB';
       $scope.centerLabelDynamic = "percent";
       $scope.labelUnitsDynamic = 'MB';
       $scope.thresholdErrorDynamic = '90';
       $scope.thresholdWarningDynamic = '60';

       $scope.thresholdChanged = function(threshold) {
          $scope.threshLabel = threshold;
       };

       $interval(function () {
         $scope.dataDynamic.used = Number($scope.dataDynamic.used) + 40;

         if ($scope.dataDynamic.used > 1000) {
           $scope.dataDynamic.used = 10;
         }
       }, 1000);

       $scope.dataNoThresh = {
         'used': '750',
         'total': '1000'
       };
       $scope.unitsNoThresh = 'GB';

       $scope.dataUsed = {
         'used': '350',
         'total': '1000'
       };
       $scope.centerUnitsUsed = 'GB';
       $scope.centerLabelUsed = 'used';
       $scope.labelLabelUsed = 'available';
       $scope.thresholdErrorUsed = '90';
       $scope.thresholdWarningUsed = '60';

       $scope.dataAvail = {
         'used': '350',
         'total': '1000'
       };
       $scope.centerUnitsAvail = 'GB';
       $scope.centerLabelAvail = 'available';
       $scope.thresholdErrorAvail = '90';
       $scope.thresholdWarningAvail = '60';

       $scope.dataPct = {
         'used': '350',
         'total': '1000'
       };
       $scope.centerLabelPct = 'percent';
       $scope.labelUnitsPct = 'GB';
       $scope.thresholdErrorPct = '90';
       $scope.thresholdWarningPct = '60';

       $scope.dataNone = {
         'used': '350',
         'total': '1000'
       };
       $scope.centerUnitsNone = 'GB';
       $scope.centerLabelNone = 'none';
       $scope.thresholdErrorNone = '90';
       $scope.thresholdWarningNone = '60';

     });
   </file>
 </example>
*/

angular.module('patternfly.charts').component('pfUtilizationDonutChart', {
  bindings: {
    centerLabel: '<?',
    centerUnits: '<',
    centerUnitsOnly: '<?',
    chartData: '<',
    chartLayout: '@?',
    chartSize: '<?',
    chartTitle: '<?',
    labelLabel: '<?',
    labelUnits: '<?',
    onThreshholdChange: '&?',
    thresholdError: '<?',
    thresholdWarning: '<?'
  },

  templateUrl: 'charts/utilization-donut/utilization-donut-chart.html',
  controller: function ($scope) {
    'use strict';
    var ctrl = this;

    ctrl.$id = $scope.$id;

    ctrl.config = {
      chartId: '_' + ctrl.$id
    };

    ctrl.updateThresholds = function () {
      ctrl.config.thresholds = ctrl.config.thresholds || {};

      if (ctrl.thresholdWarning) {
        ctrl.config.thresholds.warning = ctrl.thresholdWarning;
      }

      if (ctrl.thresholdWarning) {
        ctrl.config.thresholds.error = ctrl.thresholdError;
      }
    };

    ctrl.updateChartSize = function () {
      ctrl.config.size = ctrl.config.size || {};

      if (ctrl.chartSize) {
        ctrl.config.size.width = ctrl.config.size.height = ctrl.chartSize;
      }
    };

    ctrl.updateUnits = function () {
      if (ctrl.labelLabel === 'percent' || ctrl.centerLabel === 'percent') {
        ctrl.labelUnits = ctrl.labelUnits || '';
        ctrl.centerUnits = ctrl.centerUnits || '';
      } else {
        ctrl.labelUnits = ctrl.labelUnits || ctrl.centerUnits || '';
        ctrl.centerUnits = ctrl.centerUnits || ctrl.labelUnits || '';
      }
      ctrl.config.units = ctrl.centerUnits;
    };

    ctrl.updateLabels = function () {
      ctrl.labelLabel = ctrl.labelLabel || '';
      ctrl.centerLabel = ctrl.centerLabel || '';
    };

    ctrl.updateCenterUnits = function () {
      if (ctrl.centerUnitsOnly === true && ctrl.centerLabel !== 'none') {
        ctrl.config.centerLabelFn = function () {
          var unitValue;

          switch (ctrl.centerLabel) {
          case 'available':
            unitValue = ctrl.chartData.available + ctrl.centerUnits || '';
            break;
          case 'percent':
            unitValue = ctrl.chartData.percent + '%';
            break;
          default:
            unitValue = ctrl.chartData.used + ctrl.centerUnits || '';
            break;
          }

          return unitValue;
        };
      }
    };

    ctrl.$onChanges = function (changesObj) {
      if (ctrl.thresholdWarning || changesObj.thresholdError) {
        ctrl.updateThresholds();
      }

      if (changesObj.chartSize) {
        ctrl.updateChartSize();
      }

      if (changesObj) {
        ctrl.updateUnits();
        ctrl.updateLabels();
        ctrl.updateCenterUnits();
      }
    };
  }
});
