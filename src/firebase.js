// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-9BvLGZnewDlF50jRuodsg-JY9t3XK74",
  authDomain: "board-auth-a2d33.firebaseapp.com",
  projectId: "board-auth-a2d33",
  storageBucket: "board-auth-a2d33.appspot.com",
  messagingSenderId: "337265046311",
  appId: "1:337265046311:web:68ab69aca53c356cbb2f02",
  measurementId: "G-HXM4JW6R1H"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);