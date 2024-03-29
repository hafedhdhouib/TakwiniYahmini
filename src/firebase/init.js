import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/storage"
import "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDOqfpI-wZf8Ki0T07FvBVv_Te4kSrgemw",
  authDomain: "takwini-yahmini.firebaseapp.com",
  projectId: "takwini-yahmini",
  storageBucket: "takwini-yahmini.appspot.com",
  messagingSenderId: "24273854799",
  appId: "1:24273854799:web:afc36f6004abe03649e53a",
  measurementId: "G-6HW9ZX8HMZ"};


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