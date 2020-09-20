import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLrnKzww6E7sjTF8JI4fzb98B9iBEmLQU",
  authDomain: "ig-clone-14.firebaseapp.com",
  databaseURL: "https://ig-clone-14.firebaseio.com",
  projectId: "ig-clone-14",
  storageBucket: "ig-clone-14.appspot.com",
  messagingSenderId: "40040115096",
  appId: "1:40040115096:web:086ae3ff814a7ab14699ed"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export {db, auth, storage} ;