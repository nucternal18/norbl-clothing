import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDNtVbqH8UTkmlsQMlH0hM7a5nS13j_8HE',
    authDomain: 'norbl-db.firebaseapp.com',
    databaseURL: 'https://norbl-db.firebaseio.com',
    projectId: 'norbl-db',
    storageBucket: '',
    messagingSenderId: '614882528675',
    appId: '1:614882528675:web:89cba5b11e729ed8f05e16'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;