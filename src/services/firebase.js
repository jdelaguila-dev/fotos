// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage, ref } from "firebase/storage";
import { getFirestore, collection } from 'firebase/firestore'
import { getDatabase, ref as dbRef } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAi06ad4r8lrnT30XIl5TTfOgw5oRGp2O4",
  authDomain: "fotos-devcloud.firebaseapp.com",
  projectId: "fotos-devcloud",
  storageBucket: "fotos-devcloud.appspot.com",
  messagingSenderId: "632415215839",
  appId: "1:632415215839:web:123c49e10151377159096a",
  measurementId: "G-BDH0SQGYXR",
});

// Initialize Firebase
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);
const database = getDatabase(firebaseApp)

export const storageRef = ref(storage, 'images')
export const todosRef = collection(db, 'todos')
export const profileRef = dbRef(database, 'profiles')
