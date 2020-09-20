import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvb6BTAaULAWEAa1v8bYWuSl8-dT7j51M",
  authDomain: "yt-clone-14.firebaseapp.com",
  databaseURL: "https://yt-clone-14.firebaseio.com",
  projectId: "yt-clone-14",
  storageBucket: "yt-clone-14.appspot.com",
  messagingSenderId: "410539282853",
  appId: "1:410539282853:web:b2f72d4c74ac24657e984c",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
