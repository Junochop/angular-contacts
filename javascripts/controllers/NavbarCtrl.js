'use strict';

app.controller("NavbarCtrl", function($location, $rootScope, $scope, $window){
	$scope.logoutUser = () => {
		delete $rootScope.uid;
		$window.localStorage.clear();
		$location.path('/login');
	};

});