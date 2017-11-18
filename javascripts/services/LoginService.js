'use strict';

app.service("LoginService", function(){
	const authenticateGoogle = () => {
    	const provider = new firebase.auth.GoogleAuthProvider();
    	return firebase.auth().signInWithPopup(provider);
	};

		const isAuthenticated = () => {
   		return firebase.auth().currentUser ? true : false;

	};
		const logout = () => {
   		firebase.auth().signOut();
	};

	return {authenticateGoogle};

});