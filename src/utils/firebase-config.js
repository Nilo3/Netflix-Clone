
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA90qa2DeJL0H1axN1o9vNH9h6wT61c6zc",
  authDomain: "react-netflix-clone-b8595.firebaseapp.com",
  projectId: "react-netflix-clone-b8595",
  storageBucket: "react-netflix-clone-b8595.appspot.com",
  messagingSenderId: "1028311346941",
  appId: "1:1028311346941:web:f773554f23ee74a70a9894",
  measurementId: "G-G0GPNFNW3K"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app); 