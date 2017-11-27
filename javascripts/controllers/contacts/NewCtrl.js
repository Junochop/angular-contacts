'use strict';

app.controller("NewCtrl", function($location, $rootScope, $scope, contactService){
	$scope.newContact = {};

	$scope.buttonSubmit = () => {
		let newContact = {
			"uid": $rootScope.uid,
			"firstName": $scope.newContact.firstName,
			"lastName": $scope.newContact.lastName,
			"favoriteColor": $scope.newContact.favoriteColor,
			"occupation": $scope.newContact.occupation,
			"phoneNumber": $scope.newContact.phoneNumber,
			"email": $scope.newContact.email

		};

		contactService.addNewContact(newContact).then(() => {
			$location.path('/contacts/view');
		}).catch((err) => {
			console.log("err in addNewContact", err);
		});


	};
	
 
});