// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCURPvtwZCm75MwULYolKdYDdZ-PTFBMdE",
  authDomain: "intiquery2.firebaseapp.com",
  projectId: "intiquery2",
  storageBucket: "intiquery2.appspot.com",
  messagingSenderId: "84650916518",
  appId: "1:84650916518:web:36f7026f1e1306deac9267",
};

const app = initializeApp(firebaseConfig);
console.log("firebase app", app);
export const auth = getAuth();
