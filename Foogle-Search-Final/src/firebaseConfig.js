// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtW7fszphx2QunGFf6hqdYs1V8P_j5cK8",
  authDomain: "foogle-612c9.firebaseapp.com",
  projectId: "foogle-612c9",
  storageBucket: "foogle-612c9.firebasestorage.app",
  messagingSenderId: "988667291686",
  appId: "1:988667291686:web:4ae62cb93d641e2660dee7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth } from "firebase/auth";

const auth = getAuth(app);
export { auth };

import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);
export { db };
