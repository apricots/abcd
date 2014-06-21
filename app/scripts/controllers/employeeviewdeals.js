'use strict';

app.controller('EmployeeViewDealsCtrl', function ($scope, $location) {


	$scope.goToNewDeals = function() {
		$location.path('/employeeViewNewDeals');
	}
    
});
