import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDg5oECRxYrLIz9KeN9QXHrL2WElel6uV0",
  authDomain: "reactadvanced-aa0b8.firebaseapp.com",
  projectId: "reactadvanced-aa0b8",
  storageBucket: "reactadvanced-aa0b8.appspot.com",
  messagingSenderId: "680762653987",
  appId: "1:680762653987:web:38ea77c82a939748bc2096",
  measurementId: "G-XTS72YESWQ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //contains all of the crud methods. (user the documentref)
  const snapShot = await userRef.get(); //snapShots represent the data (just a snapshot no operations)

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
      console.log("error creating user: ", error.message);
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
