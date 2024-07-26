// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVsqXbXNsyyEQI6KHNFFlm6objFkrXAcM",
  authDomain: "lootlo-e-commerce-tutorial.firebaseapp.com",
  projectId: "lootlo-e-commerce-tutorial",
  storageBucket: "lootlo-e-commerce-tutorial.appspot.com",
  messagingSenderId: "817142792175",
  appId: "1:817142792175:web:2910633324f5c70024c01a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
