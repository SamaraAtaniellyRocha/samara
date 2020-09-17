import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC449Ig9QZexsXmOS-iy-lYmDrT37YqFSM",
  authDomain: "contact-samara.firebaseapp.com",
  databaseURL: "https://contact-samara.firebaseio.com",
  projectId: "contact-samara",
  storageBucket: "contact-samara.appspot.com",
  messagingSenderId: "290171703383",
  appId: "1:290171703383:web:cab0897138df4b16021312",
});

var db = firebaseApp.firestore();

export { db };
