// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA77xb9tPpLQd2BjacVdr2aHkrEARkdNpE",
    authDomain: "maruf-code.firebaseapp.com",
    projectId: "maruf-code",
    storageBucket: "maruf-code.appspot.com",
    messagingSenderId: "637487044102",
    appId: "1:637487044102:web:228795c61dd70a0c025587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;