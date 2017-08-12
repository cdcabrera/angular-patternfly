describe('Directive: pfUtilizationDonutChart', function() {
  var $scope, ctrl, $compile, $timeout, element;

  beforeEach(module(
    'patternfly.charts',
    'charts/empty-chart.html',
    'charts/donut/donut-pct-chart.html',
    'charts/utilization-donut/utilization-donut-chart.html'
  ));

  beforeEach(inject(function(_$compile_, _$rootScope_, _$timeout_) {
    $compile = _$compile_;
    $scope = _$rootScope_;
    $timeout = _$timeout_;
  }));

  beforeEach(function() {
    $scope.config = {
    };

    $scope.data = {
      "used": 950,
      "total": 1000
    };

    $scope.units = 'GB';
  });

  var compileDonut = function (markup) {
    var el = $compile(angular.element(markup))($scope);
    $scope.$apply();
    ctrl = el.controller('pfDonutPctChart');
    return el;
  };

  it("should show empty chart when the dataAvailable is set to false", function() {

    var element = compileDonut('<pf-utilization-donut-chart chart-data="data" chart-size="85" center-units="units" center-units-only="true"></pf-utilization-donut-chart>');

    var emptyChart = element.find('.empty-chart-content');
    expect(emptyChart.length).toBe(0);

    $scope.data.dataAvailable = false;
    $scope.$digest();

    emptyChart = element.find('.empty-chart-content');
    expect(emptyChart.length).toBe(1);
  });
});
