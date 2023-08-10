// Import the functions you need from the SDKs you need
import FirebaseApp from "firebase/app";
import firebase from "firebase/app";
import auth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = new FirebaseApp({
  apiKey: "AIzaSyCSJVLdkkgPTo1drXdX5DvCkNOIQfUDaTU",
  authDomain: "reff-admin-cheb.firebaseapp.com",
  projectId: "reff-admin-cheb",
  storageBucket: "reff-admin-cheb.appspot.com",
  messagingSenderId: "204384502182",
  appId: "1:204384502182:web:fc35561594c95d738acf67",
});

// Initialize Firebase

// Export the auth module
const auth = firebase.auth();

auth.signInWithEmailAndPassword("user@example.com", "password");

// The firestore variable is no longer needed, since Firebase 9.0 no longer supports Firestore in the browser.
// If you need a Firestore database, you can import it separately:
// import "firebase/firestore";
