'use strict';

app.controller('DealMakerNewDealCtrl', function ($scope, $location, Deal) {

	$scope.deal = {};

	$scope.submitDeal = function() {
		console.log($scope.deal);
		Deal.create($scope.deal).then(function() {
			$location.path('/dealMakerViewDeals');
		}, function() {
			$location.path('/dealMakerViewDeals');
		});
	};
    
});
