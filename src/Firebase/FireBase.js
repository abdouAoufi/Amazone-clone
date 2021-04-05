// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBe7lkpGECDRPuNAC6gkOU16IfFP3hjid4",
  authDomain: "e-clone-d2cd8.firebaseapp.com",
  projectId: "e-clone-d2cd8",
  storageBucket: "e-clone-d2cd8.appspot.com",
  messagingSenderId: "874290544695",
  appId: "1:874290544695:web:24c4a43ab3ff4ba6083fb2",
  measurementId: "G-1CH78BRP9C",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db , auth , provider} ;


