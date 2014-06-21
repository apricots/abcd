'use strict';

app.controller('DealMakerViewDealsCtrl', function ($scope, $rootScope, $resource, User, Deal) {

	$scope.deals = [];


    $rootScope.$on('userReady', function(e) {
        var user = User.getCurrent();
        Deal.dealsByUserResource.get({username:user.username}, function(deals) {
        	$scope.deals = deals;
        });
      });
    
});
