import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBAXcvIN7bZzdrekXBpqRk28-SCgEv5YJg",
  authDomain: "website-db-409ca.firebaseapp.com",
  projectId: "website-db-409ca",
  storageBucket: "website-db-409ca.appspot.com",
  messagingSenderId: "339335120645",
  appId: "1:339335120645:web:890fa3d34f73df5c25596c",
  measurementId: "G-HESNRZSD1F",
};

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error Creating User", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
