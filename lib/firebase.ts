import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDJhYe8hkInZWJ2veylsZ7e6ka3-cmlnec",
  authDomain: "bytebase-tech.firebaseapp.com",
  projectId: "bytebase-tech",
  storageBucket: "bytebase-tech.appspot.com",
  messagingSenderId: "45134401319",
  appId: "1:45134401319:web:da18d63f4af6a7ea3a2302",
  measurementId: "G-8Y61KMNH90"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
