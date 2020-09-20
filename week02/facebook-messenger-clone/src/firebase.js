import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD0M45ObCQVTtfDoJ5ej-_uynCdHgJnwTI",
  authDomain: "facebook-messenger-clone-saim.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-saim.firebaseio.com",
  projectId: "facebook-messenger-clone-saim",
  storageBucket: "facebook-messenger-clone-saim.appspot.com",
  messagingSenderId: "954449129406",
  appId: "1:954449129406:web:6c0cd40d4ecfebbe0c93ef"
});

const db = firebaseApp.firestore();

export default db ;