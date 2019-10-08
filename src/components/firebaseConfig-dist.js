import firebase from 'firebase';

const config = {
    apiKey: "secret",
    authDomain: "secret",
    databaseURL: "secret",
    projectId: "secret",
    storageBucket: "secret",
    messagingSenderId: "secret",
    appId: "secret"
};

firebase.initializeApp(config);
export default firebase;
