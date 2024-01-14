// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJeEmcv2hhlZBD7zb6KwlI3Te2zYaTX6k",
  authDomain: "social-media-53124.firebaseapp.com",
  projectId: "social-media-53124",
  storageBucket: "social-media-53124.appspot.com",
  messagingSenderId: "822069492851",
  appId: "1:822069492851:web:9327443ed8a29200f8fe06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);