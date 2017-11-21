'use strict';

app.controller("NavbarCtrl", function($location, $rootScope, $scope, $window, LoginService){
	$scope.logoutUser = () => {
		delete $rootScope.uid;
		$window.localStorage.clear();
		LoginService.logout();
		$location.path('/login');
	};

});