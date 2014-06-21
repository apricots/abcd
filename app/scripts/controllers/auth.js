'use strict';

app.controller('AuthCtrl',
  function ($rootScope, $scope, $location, Auth, User) {

    $scope.userRoles = [
      { label: 'Employee', value: 'Employee' },
      { label: 'Company', value: 'Company' },
      { label: 'Deal Maker', value: 'DealMaker' }
    ];

    $scope.user = {};
    $scope.user.role = $scope.userRoles[0];

    if (Auth.signedIn()) {
      processLogin();
    }

    $scope.$on('$firebaseSimpleLogin:login', function () {
      processLogin();
    });

    $scope.login = function () {
      Auth.login($scope.user).then(function () {
        processLogin();
      }, function (error) {
        $scope.error = error.toString();
      });
    };

    $scope.register = function () {
      Auth.register($scope.user).then(function (authUser) {
        User.create(authUser, $scope.user.username, $scope.user.role);
        Auth.login($scope.user).then(function () {
          processLogin();
        }, function (error) {
          $scope.error = error.toString();
        });
      }, function (error) {
        $scope.error = error.toString();
      });
    };

    function processLogin() {
      $rootScope.$on('userReady', function(e) {
        var user = User.getCurrent();
        console.log(user.role);
        if (user.role === "Employee") {
          $location.path('/employeeViewDeals');
        } else if (user.role === "Company") {
          $location.path('/companyViewDeals');
        } else if (user.role === "DealMaker") {
          $location.path('/dealMakerViewDeals');
        } else {
          $location.path('/');
        }
      });
    }
  });
