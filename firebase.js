// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcZZKMWbwJHiohbfIG3aVpUwhKsUFMiEk",
  authDomain: "twitter-clone-8be01.firebaseapp.com",
  projectId: "twitter-clone-8be01",
  storageBucket: "twitter-clone-8be01.appspot.com",
  messagingSenderId: "470732703564",
  appId: "1:470732703564:web:cfe49e6099edab9d4fb1e9",
  measurementId: "G-R0JERD09R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);