'use strict';

app.service("contactService", function($http, $q, FIREBASE_CONFIG){
	const getContacts = (userUid) => {
    	console.log("userUid", userUid);
    	        let myContacts = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
                let contacts = results.data;
                if (contacts != null) {
                    Object.keys(contacts).forEach((key) => {
                        contacts[key].id = key;
                        myContacts.push(contacts[key]);
                    });
                }
                resolve(myContacts);
            }).catch((err) => {
                reject(err);
            });
        });
    };

    const addNewContact = (newContact) => {
        console.log("newContact", newContact);
        return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
    };

    const deleteContact = (contactId) => {
        return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
    };

    return {addNewContact, getContacts, deleteContact};
});


