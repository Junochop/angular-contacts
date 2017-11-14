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
		.when("/favorites", {
			templateUrl: 'partials/favorites.html',
			controller: 'FavoritesCtrl'
		})
		.when("/new", {
			templateUrl: 'partials/new.html',
			controller: 'NewCtrl'
		})
		.when("/view", {
			templateUrl: 'partials/view.html',
			controller: 'ViewCtrl'
		})
		.otherwise('/login');
});