import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCf_zu_hux4pa31V-s3Cqb8DaX2B5GDDr0",
  authDomain: "todo-app-saim.firebaseapp.com",
  databaseURL: "https://todo-app-saim.firebaseio.com",
  projectId: "todo-app-saim",
  storageBucket: "todo-app-saim.appspot.com",
  messagingSenderId: "610061542234",
  appId: "1:610061542234:web:250218142bc4f5e9d58963"
});

const db = firebaseApp.firestore();

export { db };