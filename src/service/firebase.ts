import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAjBhhwXcSMZwqoSvgNAMpEh2XeGFr1-o",
  authDomain: "ontheway-b0751.firebaseapp.com",
  projectId: "ontheway-b0751",
  storageBucket: "ontheway-b0751.appspot.com",
  messagingSenderId: "862455902618",
  appId: "1:862455902618:web:9ea98a53f7866d31098a23",
  measurementId: "G-W1DGZP3VCY"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export { firebaseAuth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
