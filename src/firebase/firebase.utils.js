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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log("error creatin user", error)
        }
    }
    return userRef; 
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((acc, collection) => {
        return {...acc, [collection.title.toLowerCase()]: collection}
    }, {})
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef =  collectionRef.doc();
        batch.set(newDocRef, obj)
    });

    await batch.commit();
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();    
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;