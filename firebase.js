// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbkQ3Ze7S-hPj9aUDGVqQvIW8m1tRrfMQ",
  authDomain: "thegram2-26ef2.firebaseapp.com",
  projectId: "thegram2-26ef2",
  storageBucket: "thegram2-26ef2.appspot.com",
  messagingSenderId: "363282914605",
  appId: "1:363282914605:web:2a42e742bb617af90487a4",
  measurementId: "G-ZE01P2XM4J"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };