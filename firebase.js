// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBAJv2Tdt8UwcgMjeH-a5ECKiORDCoM4c",
  authDomain: "twitter-clone-d6ad4.firebaseapp.com",
  projectId: "twitter-clone-d6ad4",
  storageBucket: "twitter-clone-d6ad4.appspot.com",
  messagingSenderId: "82221056462",
  appId: "1:82221056462:web:2a3e2f5f1cd64356082b9f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
