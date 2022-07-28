
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";

import firebase from "./firebase";
import { ToastifyInfo} from "./toastNotify";

// *Authentication
const auth = getAuth(firebase);

export const createUser = async (email, password,navigate,displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password);

    navigate("/");
    await updateProfile(auth.currentUser, {
      displayName: displayName
    })
    console.log(userCredential)
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email,password,navigate) => {
  try {

    let userCredential = await signInWithEmailAndPassword(auth, email, password);
    navigate("/");

    console.log(userCredential)
  } catch (err) {
    alert(err.message)
   }
  
  
}

export const logOut = () => {
  signOut(auth)
  ToastifyInfo("logged out successfully")

}

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser)
    } else {
      setCurrentUser(false)
      
    }
  });
}

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
    navigate("/")
    // console.log(result);
  }).catch((error) => {
    console.log(error);
  });

}

export const forgotPassword = (email) => {
  // Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // toastWarnNotify("Please check your mail box!");
      // alert("Please check your mail box!");
    })
    .catch((err) => {
      // toastErrorNotify(err.message);
      // alert(err.message);

    });
};





 