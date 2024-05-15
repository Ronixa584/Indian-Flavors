
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8J3VgdKz1NV1QVkp1xUMSIdbIDk8v4B8",
  authDomain: "foodkingdom-833bf.firebaseapp.com",
  projectId: "foodkingdom-833bf",
  storageBucket: "foodkingdom-833bf.appspot.com",
  messagingSenderId: "685888313162",
  appId: "1:685888313162:web:396321981a5c6390ea13b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = getAuth();
const provider = new GoogleAuthProvider();

//Firestore
const fireApp = initializeApp(firebaseConfig);
export const db = getFirestore(fireApp);

export {firebase, auth, database,provider};