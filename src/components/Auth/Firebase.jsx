import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import GoogleAuthProvider and signInWithPopup

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZjGQb8lWxKdPf94ipmk-xleQbuSAe-xU",
    authDomain: "scrollme-40ba6.firebaseapp.com",
    projectId: "scrollme-40ba6",
    storageBucket: "scrollme-40ba6.appspot.com",
    messagingSenderId: "748771881750",
    appId: "1:748771881750:web:2cb97bb2c7b7468a7c1637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the auth service
const auth = getAuth(app);

// Set up Google Auth Provider
const provider = new GoogleAuthProvider();

// Export app, auth, provider, and signInWithPopup
export { app, auth, provider, signInWithPopup };
