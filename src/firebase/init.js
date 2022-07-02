// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection,getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);
export default db;
