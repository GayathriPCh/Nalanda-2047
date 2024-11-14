// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE9kGbMkgzhOVNLBwd1YD4WoIwUaOe1qU",
  authDomain: "ovps-2c71b.firebaseapp.com",
  projectId: "ovps-2c71b",
  storageBucket: "ovps-2c71b.appspot.com",
  messagingSenderId: "585114211388",
  appId: "1:585114211388:web:ccf8bed3fc62f565d15f39",
  measurementId: "G-E9CSTYL6HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);