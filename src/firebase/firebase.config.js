// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaMc4tKXduah49UCUgufma6ztDRxsYjmM",
  authDomain: "conceptual-2-firebase.firebaseapp.com",
  projectId: "conceptual-2-firebase",
  storageBucket: "conceptual-2-firebase.firebasestorage.app",
  messagingSenderId: "844809249828",
  appId: "1:844809249828:web:183d592702595b96a4a4b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;