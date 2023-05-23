import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAOEXilya1YNLewIx5G9qwotk9BPl3lp9U",
    authDomain: "finance-wizard-3aa8b.firebaseapp.com",
    projectId: "finance-wizard-3aa8b",
    storageBucket: "finance-wizard-3aa8b.appspot.com",
    messagingSenderId: "686518037366",
    appId: "1:686518037366:web:ecd426bb54ab6e62112857"
};

// activate firebase app
const app = initializeApp(firebaseConfig);

// configure settings
const auth = getAuth(app);

//set up provider
const provider = new GoogleAuthProvider();

//set up auth functions
const login = () => {
    getAuth();
    signInWithPopup(auth, provider)
}

const logout = ()=>{
    getAuth();
    signOut(auth);
}

export {login, logout, auth}