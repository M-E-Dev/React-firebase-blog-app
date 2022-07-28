import React, { createContext, useContext } from "react";
import { auth, googleProvider } from "../utils/firebaseUtil";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateCurrentUser,
} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = () => {
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    auth.signOut();
  }

  function loginWithGoogle() {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    auth.signInWithPopup(googleProvider);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
};

export default AuthContextProvider;
