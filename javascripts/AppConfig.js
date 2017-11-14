'use strict';
//app config runs one time. no fat arrow
app.run(function(FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
		.when("/login", {
			templateUrl: 'partials/login.html',
			controller: 'LoginCtrl'
		})
		.when("/contacts/favorites", {
			templateUrl: 'partials/favorites.html',
			controller: 'FavoritesCtrl'
		})
		.when("/contacts/new", {
			templateUrl: 'partials/new.html',
			controller: 'NewCtrl'
		})
		.when("/contacts/view", {
			templateUrl: 'partials/view.html',
			controller: 'ViewCtrl'
		})
		.otherwise('/login');
});