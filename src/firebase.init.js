// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVVvwjLaJznB8lguK1XlyticaOF6M03kY",
  authDomain: "task-1-7ffda.firebaseapp.com",
  projectId: "task-1-7ffda",
  storageBucket: "task-1-7ffda.appspot.com",
  messagingSenderId: "288851917308",
  appId: "1:288851917308:web:bd34bee0bd0af4e3019a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;