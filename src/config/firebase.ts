// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnMM1HHhyBhQrORMW-f4xm_Nm3RxTD9ow",
  authDomain: "braidswigs-33a9a.firebaseapp.com",
  projectId: "braidswigs-33a9a",
  storageBucket: "braidswigs-33a9a.appspot.com",
  messagingSenderId: "65947887024",
  appId: "1:65947887024:web:065ef1bff9e8373fd56275",
  measurementId: "G-V4W9SC602R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);