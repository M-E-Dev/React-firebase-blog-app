import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseUtil = firebase.initializeApp({
  apiKey: "AIzaSyChlCC7DciNebj3lccCKg8Lt3MziRF1wUI",
  authDomain: "fir-blog-app-3184e.firebaseapp.com",
  databaseURL: "https://fir-blog-app-3184e-default-rtdb.firebaseio.com",
  projectId: "fir-blog-app-3184e",
  storageBucket: "fir-blog-app-3184e.appspot.com",
  messagingSenderId: "903139893681",
  appId: "1:903139893681:web:08953024e331478f345d90"

});
// const firebaseUtil = firebase.initializeApp({
//   apiKey:process.env.REACT_APP_FIREBASE_apiKey,
//   authDomain:process.env.REACT_APP_FIREBASE_authDomain,
//   projectId:process.env.REACT_APP_FIREBASE_projectId,
//   storageBucket:process.env.REACT_APP_FIREBASE_storageBucket,
//   messagingSenderId:process.env.REACT_APP_FIREBASE_messagingSenderId,
//   appId:process.env.REACT_APP_FIREBASE_appId,
//   databaseURL: process.env.REACT_APP_databaseURL
// });
export default firebaseUtil;

export const auth = firebaseUtil.auth();
export const firebaseDB = firebaseUtil.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

