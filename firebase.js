<script type="module">
Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
ODO: Add SDKs for Firebase products that you want to use
https://ppagendar-agenda-default-rtdb.firebaseio.com/


  const firebaseConfig = {
    apiKey: "AIzaSyCwg0A65-J0x6ewX33ytTJCYuX00Ynk-jE",
    authDomain: "ppagendar-agenda.firebaseapp.com",
    projectId: "ppagendar-agenda",
    storageBucket: "ppagendar-agenda.firebasestorage.app",
    messagingSenderId: "397020542382",
    appId: "1:397020542382:web:d8b7a13878b69496ef043f",
    measurementId: "G-GTMS8LCMR3"
    https://ppagendar-agenda-default-rtdb.firebaseio.com/
  };

  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

// Ejemplo usando el SDK de Firebase JS v9+ (API Modular)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase para tu aplicación web
// Este objeto debe contener la configuración de tu proyecto,
// que puedes encontrar en la configuración de tu proyecto de Firebase
const firebaseConfig = {
  // ... tus valores de configuración ...
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos Firestore
const db = getFirestore(app);

// ¡Ahora puedes empezar a usar 'db' para interactuar con tu base de datos Firestore!
