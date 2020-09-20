import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8PAZtNtzAIjjA7C36C8Su_km8WIaXWo4",
  authDomain: "atoz-clone-14.firebaseapp.com",
  databaseURL: "https://atoz-clone-14.firebaseio.com",
  projectId: "atoz-clone-14",
  storageBucket: "atoz-clone-14.appspot.com",
  messagingSenderId: "530141838840",
  appId: "1:530141838840:web:20ad7a1a8528e2772b6a0d",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
