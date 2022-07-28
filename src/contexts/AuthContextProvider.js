import React, { createContext, useContext, useState } from "react";
import { auth, googleProvider } from "../utils/firebaseUtil";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updatePassword,
     updateEmail, sendPasswordResetEmail, signInWithPopup, setCustomParameters, signOut, onAuthStateChanged} from "firebase/auth";

const AuthContext = createContext();
const currentUser = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {

     const [loading, setLoading] = useState(true)
     const [currentUser, setCurrentUser] = useState();

     useEffect(() => {
         const unsubscribe = auth.onAuthStateChanged((user) => { setCurrentUser(user); setLoading(false) })
    //    garbage collect -> apiden gelen veriyi bu return ile component unmount olduğunda silmiş olduk
       return unsubscribe;
     }, [])
     

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

     const values = { currentUser, signup, login, logout, loginWithGoogle, resetPassword, updateEmail, updatePassword }
     return <AuthContext.Provider value={values} >{!loading && children}</AuthContext.Provider>;
};

export default AuthContextProvider;
