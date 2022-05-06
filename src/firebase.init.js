// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ3M3Ww8OW4pqMQaZRnSzjTyoA64-IVJw",
  authDomain: "halda-fruits-warehouse.firebaseapp.com",
  projectId: "halda-fruits-warehouse",
  storageBucket: "halda-fruits-warehouse.appspot.com",
  messagingSenderId: "775386346807",
  appId: "1:775386346807:web:9a3841500450d3bf1156b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;