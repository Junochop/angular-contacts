'use strict';

app.controller("LoginCtrl", function($location, $scope,  $rootScope, LoginService){
	$scope.authenticate = () => {

		LoginService.authenticateGoogle().then((result) => {
		$rootScope.uid = result.user.uid;
		$scope.$apply(()=> {
			$location.url("contacts/favorites");
		});
		
			console.log(result);
		}).catch( (err) =>{
			console.log("error in authencticateGoogle", err);
		});
	};
});