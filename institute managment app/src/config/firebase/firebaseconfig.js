
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAEhC5PEB-ajwFSM7Ls6nzQMbQj9w0-hNY",
  authDomain: "institute-management-app-b15ce.firebaseapp.com",
  projectId: "institute-management-app-b15ce",
  storageBucket: "institute-management-app-b15ce.appspot.com",
  messagingSenderId: "537246999388",
  appId: "1:537246999388:web:5dde39388d66e85b839799",
  measurementId: "G-RCP3FFX9L1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app

