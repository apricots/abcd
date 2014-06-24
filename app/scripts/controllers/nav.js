'use strict';

app.controller('NavCtrl', function ($scope, $rootScope, $location, Post, Auth, User) {

  $scope.showPanel = false;

  function checkPath(path) {
    if (path === '/') {
      $scope.showPanel = false;
    } else {
      $scope.showPanel = true;
    }
  }
  checkPath($location.path());

  $scope.$on('$locationChangeStart', function(event, next) {
    checkPath(next);
    $scope.showAddNewDeal = false;
    if (User.getCurrent()) {
      runUserChecks();
    } else {
      $rootScope.$on('userReady', function() {
        runUserChecks();
      });
    }
  });
  

  function runUserChecks() {
    var user = User.getCurrent();
    if (user.role === 'DealMaker') {
      $scope.showAddNewDeal = true;
    } else {
      $scope.showAddNewDeal = false;
    }
  }

  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function (postId) {
      $location.path('/posts/' + postId);
      $scope.post = {url: 'http://', title: ''};
    });
  };

  $scope.logout = function () {
    Auth.logout();
  };

  $scope.goToNewDeal = function() {
    $location.path('/dealMakerNewDeal');
  };

});