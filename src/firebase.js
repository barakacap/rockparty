// Import the functions you need from the SDKs you need

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
    apiKey: "AIzaSyCJaG-6p53oTRe0CJzktcZ5C88PCXmzrIA",
    authDomain: "test-3d151.firebaseapp.com",
    projectId: "test-3d151",
    storageBucket: "test-3d151.appspot.com",
    messagingSenderId: "403491030071",
    appId: "1:403491030071:web:d5a0ca6d3b685024852bb2"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();


export { app, db};