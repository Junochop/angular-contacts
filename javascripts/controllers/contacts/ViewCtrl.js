
'use strict';

app.controller("ViewCtrl", function($location, $rootScope, $scope, contactService){
	

	const getContacts = () => {
		$scope.contacts = [];
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



	$scope.updateFavorite = (contact) => {
		
		contact.isFavorite = !contact.isFavorite;
		delete contact.$$hashKey;
		contactService.updateFavorite(contact.id, contact);
	};
		
	

});