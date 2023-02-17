// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIwLiBsMf1oCAtGeFz8xprZOJrLjsd090",
  authDomain: "react-journal-99478.firebaseapp.com",
  projectId: "react-journal-99478",
  storageBucket: "react-journal-99478.appspot.com",
  messagingSenderId: "731670923401",
  appId: "1:731670923401:web:d81bad88297e441d4c5e58",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
