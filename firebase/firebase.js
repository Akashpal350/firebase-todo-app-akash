
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoIrotVMTSrUzzTLVhm2aUZNHZIYjVfZo",
  authDomain: "fir-todo-app-15451.firebaseapp.com",
  projectId: "fir-todo-app-15451",
  storageBucket: "fir-todo-app-15451.appspot.com",
  messagingSenderId: "993745368659",
  appId: "1:993745368659:web:42e136b15d9772515378a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);