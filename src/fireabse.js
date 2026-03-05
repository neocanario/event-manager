import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAgSnH945HpEqBfiw6FfJ7yYPVWjvP2kco",
    authDomain: "event-manager-69e90.firebaseapp.com",
    databaseURL: "https://event-manager-69e90-default-rtdb.firebaseio.com",
    projectId: "event-manager-69e90",
    storageBucket: "event-manager-69e90.firebasestorage.app",
    messagingSenderId: "118103551522",
    appId: "1:118103551522:web:38ae6950137c2a867f647b",
    measurementId: "G-KK7BY1YHXG"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const db = getFirestore(app);