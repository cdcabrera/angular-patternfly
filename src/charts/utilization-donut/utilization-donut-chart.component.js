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
           <pf-utilization-donut-chart chart-data="dataDynamic" chart-size="85" center-units="centerUnitsDynamic" center-label="centerLabelDynamic" center-units-only="true" threshold-error="thresholdErrorDynamic" threshold-warning="thresholdWarningDynamic" on-threshold-change="thresholdChanged(threshold)"></pf-utilization-donut-chart>
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
             <pf-utilization-donut-chart chart-data="dataUsed" chart-size="110" center-units="centerUnitsUsed" center-label="centerLabelUsed" threshold-error="thresholdErrorDynamic" threshold-warning="thresholdWarningDynamic"></pf-utilization-donut-chart>
           </p>
         </div>
         <div class="col-md-3 text-center">
           <label>center-label = 'available'</label>
           <p>
             <pf-utilization-donut-chart chart-data="dataAvail" chart-size="110" center-units="centerUnitsAvail" center-label="centerLabelAvail" center-units-only="true"  threshold-error="thresholdErrorDynamic" threshold-warning="thresholdWarningDynamic"></pf-utilization-donut-chart>
           </p>
         </div>
         <div class="col-md-3 text-center">
           <label>center-label = 'percent'</label>
           <p>
             <pf-utilization-donut-chart chart-data="dataPct" chart-size="110" center-units="centerUnitsPct" center-label="centerLabelPct" threshold-error="thresholdErrorDynamic" threshold-warning="thresholdWarningDynamic"></pf-utilization-donut-chart>
           </p>
         </div>
         <div class="col-md-3 text-center">
           <label>center-label = 'none'</label>
           <p>
             <pf-utilization-donut-chart chart-data="dataNone" chart-size="110" center-units="centerUnitsNone" center-label="centerLabelNone" center-units-only="true" threshold-error="thresholdErrorDynamic" threshold-warning="thresholdWarningDynamic"></pf-utilization-donut-chart>
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
         'dataAvailable': $scope.dataAvailable,
         'used': '950',
         'total': '1000'
       };
       $scope.titleErr = 'some title';
       $scope.centerUnitsErr = 'GB';
       $scope.centerLabelErr = 'used';
       $scope.thresholdErrorErr = '90';
       $scope.thresholdWarningErr = '90';

       $scope.dataWarn = {
         'dataAvailable': $scope.dataAvailable,
         'used': '650',
         'total': '1000'
       };
       $scope.titleWarn = '';
       $scope.centerUnitsWarn = 'GB';
       $scope.centerLabelWarn = 'used';
       $scope.thresholdErrorWarn = '90';
       $scope.thresholdWarningWarn = '60';

       $scope.dataDynamic = {
         'dataAvailable': $scope.dataAvailable,
         'used': '550',
         'total': '1000'
       };
       $scope.titleDynamic = '';
       $scope.centerUnitsDynamic = '%';
       $scope.centerLabelDynamic = "percent";
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
         'dataAvailable': $scope.dataAvailable,
         'used': '750',
         'total': '1000'
       };
       $scope.unitsNoThresh = 'GB';

       $scope.dataUsed = {
         'dataAvailable': $scope.dataAvailable,
         'used': '350',
         'total': '1000'
       };
       $scope.titleUsed = '';
       $scope.centerUnitsUsed = 'GB';
       $scope.thresholdErrorUsed = '90';
       $scope.thresholdWarningUsed = '60';
       //$scope.labelUsed = 'used';

       $scope.dataAvail = {
         'dataAvailable': $scope.dataAvailable,
         'used': '350',
         'total': '1000'
       };
       $scope.titleAvail = '';
       $scope.unitsAvail = 'GB';
       $scope.thresholdErrorAvail = '90';
       $scope.thresholdWarningAvail = '60';
       $scope.labelAvail = 'available';

       $scope.dataPct = {
         'dataAvailable': $scope.dataAvailable,
         'used': '350',
         'total': '1000'
       };
       $scope.titlePct = '';
       $scope.unitsPct = 'GB';
       $scope.thresholdErrorPct = '90';
       $scope.thresholdWarningPct = '60';
       $scope.labelPct = 'percent';

       $scope.dataNone = {
         'dataAvailable': $scope.dataAvailable,
         'used': '350',
         'total': '1000'
       };
       $scope.titleNone = '';
       $scope.unitsNone = 'GB';
       $scope.thresholdErrorNone = '90';
       $scope.thresholdWarningNone = '60';
       $scope.labelNone = 'none';

     });
   </file>
 </example>
*/

angular.module('patternfly.charts').component('pfUtilizationDonutChart', {
  bindings: {
    chartData: '<',
    chartTitle: '<?',
    chartSize: '<?',
    chartLayout: '@?',

    centerUnits: '<',
    centerLabel: '<?',
    //centerLabelOnly: '<?',
    centerUnitsOnly: '<?',

    labelUnits: '<?',
    labelLabel: '<?',

    thresholdError: '<?',
    thresholdWarning: '<?',
    //footerLabelFormat: '@?',
    onThreshholdChange: '&?'

    //chartHeight: '<?'

    //centerLabelFn: '&?'

    //chartFooter: '<?',
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
    //var ctrl = this, prevChartData, prevLayout;
    var ctrl = this;

    ctrl.$id = $scope.$id;
    ctrl.chartDataTotal = null;
    ctrl.chartDataUsed = null;
    ctrl.chartDataAvailable = null;
    ctrl.chartDataPercent = null;

    //ctrl.custLayout = {
    //  'type': 'inline'
    //};

    //eval('console.log(ctrl.chartHeight)');

    ctrl.config = {
      chartId: '_' + ctrl.$id
      /*units: ctrl.units,
      size: {
        height: ctrl.chartSize,
        width: ctrl.chartSize
      }*/
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

    ctrl.updateChartData = function () {
      if (ctrl.chartData) {
        ctrl.chartDataTotal = ctrl.chartData.total;
        ctrl.chartDataUsed = ctrl.chartData.used;
        ctrl.chartDataAvailable = ctrl.chartData.available;
        ctrl.chartDataPercent = ctrl.chartData.percent;
      }
    };

    ctrl.updateUnits = function () {
      //if (!ctrl.centerUnitsOnly) {
      //ctrl.labelUnits = ctrl.labelUnits || '';
      //ctrl.centerUnits = ctrl.centerUnits || '';
      //ctrl.labelUnits = ctrl.labelUnits || ctrl.centerUnits || '';
      //ctrl.centerUnits = ctrl.centerUnits || ctrl.labelUnits || '';

      if (ctrl.labelLabel === 'percent' || ctrl.centerLabel === 'percent') {
        ctrl.labelUnits = ctrl.labelUnits || '';
        ctrl.centerUnits = ctrl.centerUnits || '';
      } else {
        ctrl.labelUnits = ctrl.labelUnits || ctrl.centerUnits || '';
        ctrl.centerUnits = ctrl.centerUnits || ctrl.labelUnits || '';
      }

        //if (!ctrl.centerUnits && ctrl.labelUnits) {
        /*if (!ctrl.centerUnits) {
         ctrl.centerUnits = ctrl.labelUnits;
         //} else if (!ctrl.labelUnits && ctrl.centerUnits) {
         }

         if (!ctrl.labelUnits) {
         ctrl.labelUnits = ctrl.centerUnits;
         }

         if (!ctrl.centerUnits) {
         ctrl.labelUnits = ctrl.centerUnits = 'none';
         }*/
      //}

      //eval('console.log(ctrl.chartHeight)');
    };

    ctrl.updateLabels = function () {
      ctrl.labelLabel = ctrl.labelLabel || '';
      ctrl.centerLabel = ctrl.centerLabel || '';

      //ctrl.labelLabel = ctrl.labelLabel || ctrl.centerLabel || 'none';
      //ctrl.centerLabel = ctrl.centerLabel || ctrl.labelLabel || 'none';
    };

    ctrl.updateCenterUnits = function () {
      if (ctrl.centerUnitsOnly === true) {
        ctrl.config.centerLabelFn = function () {
          var unitValue;

          ctrl.chartDataTotal = ctrl.chartData.total;
          ctrl.chartDataUsed = ctrl.chartData.used;
          ctrl.chartDataAvailable = ctrl.chartData.available;
          ctrl.chartDataPercent = ctrl.chartData.percent;

          switch (ctrl.centerLabel) {
          case 'available':
            unitValue = ctrl.chartDataAvailable + ctrl.centerUnits;
            break;
          case 'percent':
            unitValue = ctrl.chartDataPercent + '%';
            break;
          default:
            unitValue = ctrl.chartDataUsed + ctrl.centerUnits;
            break;
          }

          return unitValue;
        };
      }
    };


    /*ctrl.updateAll = function () {
      ctrl.updateThresholds();
    };

    ctrl.$onChanges = function (changesObj) {
      ctrl.updateAll();

      if (changesObj.config || changesObj.data) {
        ctrl.updateAll();
      }
      if (changesObj.chartHeight) {
        ctrl.config.size.height = changesObj.chartHeight.currentValue;
      }
      if (changesObj.centerLabel) {
        ctrl.setupDonutChartTitle();
      }
    };*/

    ctrl.$onChanges = function (changesObj) {
      if (changesObj.thresholdWarning || changesObj.thresholdError) {
        ctrl.updateThresholds();
      }

      if (changesObj.chartData) {
        ctrl.updateChartData();
      }

      if (changesObj.chartSize) {
        ctrl.updateChartSize();
      }

      if (changesObj) {
        ctrl.updateUnits();
        ctrl.updateLabels();
        ctrl.updateCenterUnits();
      }

      /*if (changesObj.thresholdWarning || changesObj.thresholdError) {
        ctrl.updateThresholds();
        //ctrl.config.thresholds = {
        //  warning: ctrl.thresholdWarning || null,
        //  error: ctrl.thresholdError || null
        //};
      }

      if (changesObj.chartSize) {
        ctrl.updateChartSize();
      }

      if (changesObj.chartData) {
        ctrl.updateChartData();
        //ctrl.chartDataTotal = ctrl.chartData.total;
        //ctrl.chartDataUsed = ctrl.chartData.used;
        //ctrl.chartDataAvailable = ctrl.chartData.available;
        //ctrl.chartDataPercent = ctrl.chartData.percent;
        //ctrl.updateAll();
        //eval("console.log('inside=', ctrl.chartData, changesObj.chartData, changesObj.chartData.total)");
      }

      //if (changesObj.centerUnits || changesObj.labelUnits) {
        //ctrl.updateUnits();
      //}
      if (changesObj.centerUnits || changesObj.labelUnits) {
        ctrl.updateUnits();
      }

      if (changesObj.centerLabel || changesObj.labelLabel) {
        ctrl.updateLabels();
      }

      if (changesObj.centerUnitsOnly) {
        ctrl.updateCenterUnits();

        //ctrl.config.centerLabelFn = function () {
          //ctrl.chartDataTotal = ctrl.chartData.total;
          //ctrl.chartDataUsed = ctrl.chartData.used;
          //ctrl.chartDataAvailable = ctrl.chartData.available;
          //ctrl.chartDataPercent = ctrl.chartData.percent;

          //return (ctrl.units === 'percent') ? ctrl.chartDataPercent + '%' : ctrl.chartData.used; //+ ' ' + ctrl.units;
        //};
      }*/

      //eval("console.log('outside=', ctrl.chartData, changesObj)");
    };

    /*ctrl.$doCheck = function () {
      if (!angular.equals(ctrl.config, prevConfig)) {
        ctrl.generateChart();
      }
    };*/

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
