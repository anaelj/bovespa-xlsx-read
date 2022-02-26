// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk4IckPUBcG0E-pvkp5n_nYfoBuyvs38U",
  authDomain: "app-sextante-b3.firebaseapp.com",
  projectId: "app-sextante-b3",
  storageBucket: "app-sextante-b3.appspot.com",
  messagingSenderId: "1051321538989",
  appId: "1:1051321538989:web:624b860ae9b66982066924",
  measurementId: "G-JFV99BTEJT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
