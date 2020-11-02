import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChgCQG4gUx7zKv_qjGQmQjuF3Q-KiVn74",
  authDomain: "clone-7459d.firebaseapp.com",
  databaseURL: "https://clone-7459d.firebaseio.com",
  projectId: "clone-7459d",
  storageBucket: "clone-7459d.appspot.com",
  messagingSenderId: "146108781404",
  appId: "1:146108781404:web:1426a207c3ba7650676799",
  measurementId: "G-BS8X42BTBY",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
