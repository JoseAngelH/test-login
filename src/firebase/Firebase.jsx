import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBGACfC2_WKH7WbgkZJRxexIJVDFBEapvg",
    authDomain: "test-login-af193.firebaseapp.com",
    projectId: "test-login-af193",
    storageBucket: "test-login-af193.appspot.com",
    messagingSenderId: "996966178583",
    appId: "1:996966178583:web:e6b43934539adb16302152",
    measurementId: "G-TBYE7JNHSE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
export const db = getFirestore(app);
export const auth = getAuth(app);
