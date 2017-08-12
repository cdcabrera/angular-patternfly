/**
 * @ngdoc directive
 * @name patternfly.charts.component:pfUtilizationDonutChart
 * @restrict E
 *
 * @description
 *   Focuses the pfDonutPctChart component, useful for rendering a percentage within a donut/radial chart.  The Used
 *   Percentage fill starts at 12 o’clock and moves clockwise.  Whatever portion of the donut not Used, will
 *   be represented as Available, and rendered as a gray fill.
 *   There are three possible fill colors for Used Percentage, dependent on whether or not there are thresholds:<br/>
 *   <ul>
 *   <li>When no thresholds exist, or if the used percentage has not surpassed any thresholds, the indicator is blue.
 *   <li>When the used percentage has surpassed the warning threshold, but not the error threshold, the indicator is orange.
 *   <li>When the used percentage has surpassed the error threshold, the indicator is is red.
 *   </ul>
 *
 * @param {object} chart-data the data to be shown in the utilization chart
 * <ul style='list-style-type: none'>
 * <li>.used          - number representing the amount used
 * <li>.total         - number representing the total amount
 * <li>.dataAvailable - Flag if there is data available - default: true
 * </ul>
 *
 * @param {string} center-units to be displayed on the chart. Examples: "GB", "MHz", "I/Ops", etc...
 *
 * @param {string=} center-label specifies the content format for the donut's center label.
 * <strong>Values:</strong>
 * <ul style='list-style-type: none'>
 * <li> 'used'      - displays the Used amount in the center label (default)
 * <li> 'available' - displays the Available amount in the center label
 * <li> 'percent'   - displays the Usage Percent of the Total amount in the center label
 * <li> 'none'      - does not display the center label
 * </ul>
 *
 * @param {boolean=} center-units-only when true, only show the numeric value and unit
 *
 * @param {string=} charts-layout indicates whether the external label should be centered, left, or right
 * <strong>Values:</strong>
 * <ul style='list-style-type: none'>
 * <li> 'centered'  - centers the external label
 * <li> 'left'      - place the external label to the left of the chart
 * <li> 'right'     - place the external label to the right of the chart
 * </ul>
 *
 * @param {number=} chart-size the pixel dimensions of the chart, since it's square applies to both height and width
 *
 * @param {string=} chart-title The title displayed on the left-hand side of the chart
 *
 * @param {string=} label-label specifies the content format for the donut's external label.
 * <strong>Values:</strong>
 * <ul style='list-style-type: none'>
 * <li> 'used'      - displays the Used amount in the center label (default)
 * <li> 'available' - displays the Available amount in the center label
 * <li> 'percent'   - displays the Usage Percent of the Total amount in the center label
 * <li> 'none'      - does not display the center label
 * </ul>
 *
 * @param {string=} label-units to be displayed on the external label. Examples: "GB", "MHz", "I/Ops", etc...
 *
 * @param {function (threshold)=} on-threshold-change user defined function to handle when thresolds change
 * <strong>'threshold' Values:</strong>
 * <ul style='list-style-type: none'>
 * <li> 'ok'      - when ok threshold is set
 * <li> 'warning' - when warning threshold is set
 * <li> 'error'   - when error threshold is set
 * </ul>
 *
 * @param {number|string=} threshold-error error percentage threshold used to determine the Usage Percentage fill color
 *
 * @param {number|string=} threshold-warning warning percentage threshold used to determine the Usage Percentage fill color
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
