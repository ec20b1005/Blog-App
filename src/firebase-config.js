import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOgI1JEcuSik5tcXesFJ_Zg_hoEMc14I4",
  authDomain: "blogproject-79147.firebaseapp.com",
  projectId: "blogproject-79147",
  storageBucket: "blogproject-79147.appspot.com",
  messagingSenderId: "275525993586",
  appId: "1:275525993586:web:6320b46a8e1d56bbfd2eeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
