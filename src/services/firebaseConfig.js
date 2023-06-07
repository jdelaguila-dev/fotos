// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi06ad4r8lrnT30XIl5TTfOgw5oRGp2O4",
  authDomain: "fotos-devcloud.firebaseapp.com",
  projectId: "fotos-devcloud",
  storageBucket: "fotos-devcloud.appspot.com",
  messagingSenderId: "632415215839",
  appId: "1:632415215839:web:123c49e10151377159096a",
  measurementId: "G-BDH0SQGYXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);