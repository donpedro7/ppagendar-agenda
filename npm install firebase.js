npm install firebase
npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwg0A65-J0x6ewX33ytTJCYuX00Ynk-jE",
  authDomain: "ppagendar-agenda.firebaseapp.com",
  databaseURL: "https://ppagendar-agenda-default-rtdb.firebaseio.com",
  projectId: "ppagendar-agenda",
  storageBucket: "ppagendar-agenda.firebasestorage.app",
  messagingSenderId: "397020542382",
  appId: "1:397020542382:web:d8b7a13878b69496ef043f",
  measurementId: "G-GTMS8LCMR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);