import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJt6ehSMG50C1TO7ARqXoSf0F2mAHPF90",
  authDomain: "skrate-app.firebaseapp.com",
  projectId: "skrate-app",
  storageBucket: "skrate-app.appspot.com",
  messagingSenderId: "650659738526",
  appId: "1:650659738526:web:6d184ad0fef73057d75c8f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(() => {
      localStorage.setItem("isLoggedIn", true);
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      console.log(error);
      localStorage.removeItem("isLoggedIn");
    });
};
