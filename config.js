import firebase from "firebase";


//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCcTXb3Zs168vHWkTuI8NcVjJwS6ICawoM",
    authDomain: "e-rider-20241.firebaseapp.com",
    projectId: "e-rider-20241",
    storageBucket: "e-rider-20241.appspot.com",
    messagingSenderId: "881499858225",
    appId: "1:881499858225:web:e69cbf9f3332eafe60fc10"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
