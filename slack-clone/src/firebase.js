import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAYNVzo0jHEmHy5XdfCsWjPTx1jKIoc3L4",
  authDomain: "slack-clone-14.firebaseapp.com",
  databaseURL: "https://slack-clone-14.firebaseio.com",
  projectId: "slack-clone-14",
  storageBucket: "slack-clone-14.appspot.com",
  messagingSenderId: "855327187883",
  appId: "1:855327187883:web:2ebeb4e8c67c556d22a8ee",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
