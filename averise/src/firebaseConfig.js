// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQf79Vqyq2NwkeSeYoNtAY_VtaTDaW1Bg",
    authDomain: "averise-2e7f9.firebaseapp.com",
    databaseURL: "https://averise-2e7f9-default-rtdb.firebaseio.com",
    projectId: "averise-2e7f9",
    storageBucket: "averise-2e7f9.appspot.com",
    messagingSenderId: "1023658315236",
    appId: "1:1023658315236:web:b836e699a7de9926394bf1",
    measurementId: "G-GEG8BTHEXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);