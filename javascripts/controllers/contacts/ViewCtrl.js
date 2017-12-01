
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



	$scope.favoriteContact = (contact) => {
		
		contact.isFavorite = !contact.isFavorite;
		delete contact.$$hashKey;

		let newFavoriteContact = contactService.createContactObject(contact);
		console.log("Contact", contact);
		//
		
		contactService.putNewContact(contact).then((result) => {
			$location.path('/contacts/favorites');
		}).catch((err) => {
			console.log("error in putNewContact", err);
		});

	
	};


});