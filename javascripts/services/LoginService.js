'use strict';

app.service("LoginService", function(){
	const authenticateGoogle = () => {
    	const provider = new firebase.auth.GoogleAuthProvider();
    	return firebase.auth().signInWithPopup(provider);
	};

	return {authenticateGoogle};

});