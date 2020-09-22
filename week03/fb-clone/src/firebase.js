import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDNH26Ffj318Vxjq10L5Htt4hpsofHDsEc",
  authDomain: "fb-clone-14.firebaseapp.com",
  databaseURL: "https://fb-clone-14.firebaseio.com",
  projectId: "fb-clone-14",
  storageBucket: "fb-clone-14.appspot.com",
  messagingSenderId: "308415637436",
  appId: "1:308415637436:web:f2ec5ac297d848383e2db9",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
