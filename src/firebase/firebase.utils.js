import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJSOeA2zpoazS-UXgjPbPnzqLMhB3aAv4",
    authDomain: "crowndb-68e81.firebaseapp.com",
    databaseURL: "https://crowndb-68e81.firebaseio.com",
    projectId: "crowndb-68e81",
    storageBucket: "crowndb-68e81.appspot.com",
    messagingSenderId: "670036093197",
    appId: "1:670036093197:web:67f84d1002f7dcfcf2e844",
    measurementId: "G-GTW1YSSGQC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();    
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;