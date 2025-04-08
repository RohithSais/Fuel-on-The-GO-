// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHXv86AgIS-hEC_CJj2IogJwpuOi9wyEk",
  authDomain: "fuel-on-the-go-ec5c2.firebaseapp.com",
  projectId: "fuel-on-the-go-ec5c2",
  storageBucket: "fuel-on-the-go-ec5c2.appspot.com",
  messagingSenderId: "729570791244",
  appId: "1:729570791244:web:1986dcbce804179c7dc9e9",
  measurementId: "G-PRV60SNKRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);