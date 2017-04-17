describe('Directive:  pfApplicationLauncher', function () {

  var $scope;
  var $compile;
  var element;
  var isolateScope;

  // load the controller's module
  beforeEach(function () {
    module('patternfly.navigation', 'patternfly.utils', 'navigation/application-launcher.html');
  });

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_;
  }));

  var compileHTML = function (markup, scope) {
    element = angular.element(markup);
    $compile(element)(scope);

    scope.$digest();
    isolateScope = element.isolateScope();
  };

  beforeEach(function () {
    $scope.sites = [
      {
        title: "Recteque",
        href: "#/ipsum/intellegam/recteque",
        tooltip: "Total number of error items",
        iconClass: ""
      },
      {
        title: "Suavitate",
        href: "#/ipsum/intellegam/suavitate",
        tooltip: "Total number of items",
        iconClass: ""
      }
    ];
  });

  it('should have menu items', function () {
    var htmlTmp = '<pf-application-launcher items="sites" is-open="false" is-disabled="false" is-list="false"></div>';
    compileHTML(htmlTmp, $scope);

    var content = element.find('[role="menuitem"]');
    expect(content.length).toBeGreaterThan(1);
  });

  it('should be open onload', function () {
    var htmlTmp = '<pf-application-launcher items="sites" is-open="true" is-disabled="false" is-list="false" hidden-icons="false"></div>';
    compileHTML(htmlTmp, $scope);

    var content = element.find('.open > .dropdown-menu');
    expect(content.length).toBe(1);
  });

  it('should be disabled', function () {
    var htmlTmp = '<pf-application-launcher items="sites" is-open="false" is-disabled="true" is-list="false" hidden-icons="false"></div>';
    compileHTML(htmlTmp, $scope);

    var content = element.find('[id*="domain-switcher"][disabled="disabled"]');
    expect(content.length).toBe(1);
  });

  it('should be displayed as a list', function () {
    var htmlTmp = '<pf-application-launcher items="sites" is-open="false" is-disabled="false" is-list="true" hidden-icons="false"></div>';
    compileHTML(htmlTmp, $scope);

    var content = element.find('.applauncher-pf-list-default');
    expect(content.length).toBe(0);
  });

  it('should have hidden application icons', function () {
    var htmlTmp = '<pf-application-launcher items="sites" is-open="false" is-disabled="false" is-list="true" hidden-icons="true"></div>';
    compileHTML(htmlTmp, $scope);

    var content = element.find('.applauncher-pf-link-icon');
    expect(content.length).toBe(0);
  });

});

