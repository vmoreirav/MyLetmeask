import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env,
    projectId: "myletmeask-49d03",
    storageBucket: "myletmeask-49d03.appspot.com",
    messagingSenderId: "796741455203",
    appId: "1:796741455203:web:29e6586f328e0435779756"
};