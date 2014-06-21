'use strict';
/* global app:true */

var app = angular.module('abcdApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'firebase'
]);

app.constant('FIREBASE_URL', 'https://abcd-dev.firebaseio.com/');

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/splash.html',
			controller: 'SplashCtrl'
		})
		.when('/posts/:postId', {
			templateUrl: 'views/showpost.html',
			controller: 'PostViewCtrl'
		})
		.when('/dealMakerViewDeals', {
			templateUrl: 'views/dealmakerviewdeals.html',
			controller: 'DealMakerViewDealsCtrl'
		})
		.when('/dealMakerNewDeal', {
			templateUrl: 'views/dealmakernewdeal.html',
			controller: 'DealMakerNewDealCtrl'
		})
		.when('/companyViewDeals', {
			templateUrl: 'views/companyviewdeals.html',
			controller: 'CompanyViewDealsCtrl'
		})
		.when('/employeeViewDeals', {
			templateUrl: 'views/employeeviewdeals.html',
			controller: 'EmployeeViewDealsCtrl'
		})
		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'AuthCtrl'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'AuthCtrl'
		})
		.when('/users/:username', {
			templateUrl: 'views/profile.html',
			controller: 'ProfileCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});
