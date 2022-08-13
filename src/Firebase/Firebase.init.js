// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRW9OAWKncJY0auoe6wVF11Czq1whe0BY",
  authDomain: "motion-view-1521e.firebaseapp.com",
  projectId: "motion-view-1521e",
  storageBucket: "motion-view-1521e.appspot.com",
  messagingSenderId: "260347841326",
  appId: "1:260347841326:web:1288075a7a30ca5b9bc8bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;