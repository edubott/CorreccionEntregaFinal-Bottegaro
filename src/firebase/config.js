// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2SuQJ1_qD5QUQn-z2-zw4ge05UvqatN8",
  authDomain: "preentrega1-bottegaro.firebaseapp.com",
  projectId: "preentrega1-bottegaro",
  storageBucket: "preentrega1-bottegaro.appspot.com",
  messagingSenderId: "113147438903",
  appId: "1:113147438903:web:eaa3e15387267ee1489cb2",
  measurementId: "G-TKZ50XWX2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
