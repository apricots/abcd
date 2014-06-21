'use strict';

app.controller('EmployeeViewNewDealsCtrl', function ($scope, $location) {

	$scope.goToCurrentDeals = function() {
		$location.path('/employeeViewDeals');
	}

    
});
