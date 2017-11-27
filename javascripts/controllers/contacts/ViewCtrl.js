
'use strict';

app.controller("ViewCtrl", function($location, $rootScope, $scope, contactService){
	$scope.contacts = [];

	const getContacts = () => {
		contactService.getContacts($rootScope.uid).then((results) =>{
			$scope.contacts = results;
		}).catch((err) =>{
			console.log("error in getContacts", err);
		});
	};

	getContacts();

	$scope.deleteContact = (contactId) => {
		contactService.deleteContact(contactId).then((result) => {
			getContacts();
		}).catch((err) =>{
			console.log("error in deleteContact", err);
		});
	};
});