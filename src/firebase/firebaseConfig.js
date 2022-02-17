import 'firebase/firestore'
import 'firebase/auth'


// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVEVBnDmAiMe-qy4-JwLKB136OB-1wyrw",
  authDomain: "journal-app-9e601.firebaseapp.com",
  projectId: "journal-app-9e601",
  storageBucket: "journal-app-9e601.appspot.com",
  messagingSenderId: "1071064308936",
  appId: "1:1071064308936:web:22e40ce7e66202500b99fd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
  db,
  googleAuthProvider,
  firebase
}