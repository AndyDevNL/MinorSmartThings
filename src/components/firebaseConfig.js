import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAHGmIG9tTzIL_FN9ogQOCuC88U0tyu_Wg",
    authDomain: "smart-things-2019.firebaseapp.com",
    databaseURL: "https://smart-things-2019.firebaseio.com",
    projectId: "smart-things-2019",
    storageBucket: "smart-things-2019.appspot.com",
    messagingSenderId: "26514512076",
    appId: "1:26514512076:web:1247b9ab35d523de5aca69"
};

firebase.initializeApp(config);
export default firebase;
