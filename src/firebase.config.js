// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc1uUBHO88HXa6D24TirW8tNs4B33LyIU",
  authDomain: "auth-muster-f15d7.firebaseapp.com",
  projectId: "auth-muster-f15d7",
  storageBucket: "auth-muster-f15d7.appspot.com",
  messagingSenderId: "370748737143",
  appId: "1:370748737143:web:fe894fb90b6a42033be872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;