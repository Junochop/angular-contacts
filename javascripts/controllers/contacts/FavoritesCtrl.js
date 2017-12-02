'use strict';

app.controller("FavoritesCtrl", function($location, $rootScope, $scope, contactService){

	const getFavorites = () => {
      contactService.getFavoritesDB($rootScope.uid).then((results) =>{
      $scope.contacts = results;
      }).catch((err) =>{
      console.log("error in getFavorites", err);
      });
    };

	getFavorites();
    

	$scope.deleteContact = (contactId) => {
      contactService.deleteContact(contactId).then((result) =>{
      getFavorites();
      }).catch((err) =>{
      console.log("error in deleteContact", err);
      });
    };

    $scope.makeFavorite = (contact) => {
      contact.isFavorite = !contact.isFavorite;
      delete contact.$$hashKey;
      contactService.updateFavorite(contact.id, contact).then((result) =>{
      getFavorites();
      }).catch((err) =>{
      console.log("error in makeFavorite", err);
      });
    };
	

 
});