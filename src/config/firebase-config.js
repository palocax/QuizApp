// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore,collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm_3xomRAdiyiFnJ4cOTUXfnWWFZobsFA",
  authDomain: "quizapp-d82b9.firebaseapp.com",
  projectId: "quizapp-d82b9",
  storageBucket: "quizapp-d82b9.firebasestorage.app",
  messagingSenderId: "310828644690",
  appId: "1:310828644690:web:093b0db19c0e2356ef628b",
  measurementId: "G-WR0SRK4T89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const pasResultsCollectionRef = collection(db,"Answers");