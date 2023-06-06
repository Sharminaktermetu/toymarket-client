// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqPlcn6L1iXHyGJiFXWbyQypo7hdlWlQo",
  authDomain: "tiny-toy-town.firebaseapp.com",
  projectId: "tiny-toy-town",
  storageBucket: "tiny-toy-town.appspot.com",
  messagingSenderId: "644307942461",
  appId: "1:644307942461:web:2f1ba73997db963dbfbe54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app