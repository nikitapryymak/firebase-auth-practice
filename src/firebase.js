import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH,
    projectId: process.env.REACT_APP_PROJ,
    storageBucket: process.env.REACT_APP_STOR,
    messagingSenderId: process.env.REACT_APP_MSG,
    appId: process.env.REACT_APP_APP_ID
});

export const auth = firebase.auth();
export default firebaseApp;