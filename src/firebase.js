// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import * as admin from "firebase-admin";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSJVLdkkgPTo1drXdX5DvCkNOIQfUDaTU",
  authDomain: "reff-admin-cheb.firebaseapp.com",
  projectId: "reff-admin-cheb",
  storageBucket: "reff-admin-cheb.appspot.com",
  messagingSenderId: "204384502182",
  appId: "1:204384502182:web:fc35561594c95d738acf67",
};

// Initialize Firebase

// Export the auth module
const app = initializeApp(firebaseConfig);
const auth = getAuth();

admin
  .auth()
  .setCustomUserClaims(user.uid, { admin: true })
  .then(() => {
    // The new custom claims will propagate to the user's ID token the
    // next time a new one is issued.
  });

export { auth };

// The firestore variable is no longer needed, since Firebase 9.0 no longer supports Firestore in the browser.
// If you need a Firestore database, you can import it separately:
// import "firebase/firestore";
