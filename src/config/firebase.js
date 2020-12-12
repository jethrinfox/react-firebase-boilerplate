// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtcmclNgJi09LdzuDT5X3Cucaf4YLg5ik",
    authDomain: "fire-chat-c4778.firebaseapp.com",
    projectId: "fire-chat-c4778",
    storageBucket: "fire-chat-c4778.appspot.com",
    messagingSenderId: "238489637223",
    appId: "1:238489637223:web:b5efa3a7b201db2a705fc2",
    measurementId: "G-YKL88BX2Z7"
    /* apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID", */
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore()
const auth = app.auth()

// OAuth Providers
const googleProvider = new firebase.auth.GoogleAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()


export { app, firestore, auth, googleProvider, githubProvider, facebookProvider }