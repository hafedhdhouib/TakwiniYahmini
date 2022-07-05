import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDOqfpI-wZf8Ki0T07FvBVv_Te4kSrgemw",
  authDomain: "takwini-yahmini.firebaseapp.com",
  projectId: "takwini-yahmini",
  storageBucket: "takwini-yahmini.appspot.com",
  messagingSenderId: "24273854799",
  appId: "1:24273854799:web:afc36f6004abe03649e53a",
  measurementId: "G-6HW9ZX8HMZ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebaseApp.firestore()