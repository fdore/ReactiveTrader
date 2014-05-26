define(['js/controllers/View1Controller', 'mocks'], function (View1Controller) {
		var controller,
			scope;

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();

			controller = $controller(View1Controller, { $scope: scope });
		}));

		describe('When initializing the controller', function () {
			it("Should have its view set to 'View 1", function () {
				expect(scope.viewName).toEqual('View 1');
			});
        });

});