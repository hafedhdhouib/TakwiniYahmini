import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/storage"
import "firebase/auth"
console.log(import.meta.env);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_AIPKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("User is signed in");
    console.log(user)
  } else {
    // User is signed out
    console.log("User is signed out");
  }
})
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
export {timestamp}
export default firebaseApp.firestore()