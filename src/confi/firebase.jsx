// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGDZPwS1u2Zp5acQBy-i5BToxxvy1s3Qk",
  authDomain: "authenticationweb-9f942.firebaseapp.com",
  projectId: "authenticationweb-9f942",
  storageBucket: "authenticationweb-9f942.appspot.com",
  messagingSenderId: "694574623944",
  appId: "1:694574623944:web:3ea907b4c05158d45109fd",
  measurementId: "G-S4GMSLTNGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
