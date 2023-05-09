// src.firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgXnPVSocNN1Z-7JQBP07UM_GqcILlFqA",
  authDomain: "emall-28127.firebaseapp.com",
  projectId: "emall-28127",
  storageBucket: "emall-28127.appspot.com",
  messagingSenderId: "1004204149485",
  appId: "1:1004204149485:web:72d317b23270e200f0dae4",
  measurementId: "G-BJB5NRC894",
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
