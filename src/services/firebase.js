import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAOEXilya1YNLewIx5G9qwotk9BPl3lp9U",
    authDomain: "finance-wizard-3aa8b.firebaseapp.com",
    projectId: "finance-wizard-3aa8b",
    storageBucket: "finance-wizard-3aa8b.appspot.com",
    messagingSenderId: "686518037366",
    appId: "1:686518037366:web:ecd426bb54ab6e62112857"
};

// activate firebase app
firebase.initializeApp(firebaseConfig);

// configure settings
const auth = firebase.auth();

//set up provider
const provider = new firebase.auth.GoogleAuthProvider();

//set up auth functions
function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}

export {login, logout, auth}