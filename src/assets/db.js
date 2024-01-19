// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbLg6LE6Ovyas73pyQPGsgVpeS1ib6M5g",
  authDomain: "restaurant-48f39.firebaseapp.com",
  projectId: "restaurant-48f39",
  storageBucket: "restaurant-48f39.appspot.com",
  messagingSenderId: "185055235582",
  appId: "1:185055235582:web:0f83236ce9c2eab663c4af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)