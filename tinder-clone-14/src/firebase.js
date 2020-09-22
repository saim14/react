import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYAv116P6h-wF1fWu496YShUiPyJrofn4",
  authDomain: "tinder-clone-14.firebaseapp.com",
  databaseURL: "https://tinder-clone-14.firebaseio.com",
  projectId: "tinder-clone-14",
  storageBucket: "tinder-clone-14.appspot.com",
  messagingSenderId: "425757023298",
  appId: "1:425757023298:web:cc7e8bfcb59fa4e3e2e1db",
});

const db = firebaseApp.firestore();
export default db;
