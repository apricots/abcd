'use strict';

app.controller('DealMakerViewDealsCtrl', function ($scope, $rootScope, $resource, User, Deal) {

	function loadDeals() {
		var user = User.getCurrent();
		Deal.dealsByUserResource.get({username:user.username}, function(deals) {
			$scope.deals = deals;
		});
	}

	$scope.deals = [];

	if (User.getCurrent()) {
		loadDeals();
	} else {
		$rootScope.$on('userReady', function() {
			loadDeals();
		});
	}

});
