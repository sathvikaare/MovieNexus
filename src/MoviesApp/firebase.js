// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAU33rO1AhAXa1keQr7XL2AiGt7a4R41kw",
  authDomain: "movienexus-93c63.firebaseapp.com",
  projectId: "movienexus-93c63",
  storageBucket: "movienexus-93c63.appspot.com",
  messagingSenderId: "324666793121",
  appId: "1:324666793121:web:c0cf8ecf9b46b6463164e0",
  measurementId: "G-SQBH9FR5BD"
};


const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const firestore=getFirestore(app);
const storage=getStorage(app);
export {app,auth,firestore,storage};
// const analytics = getAnalytics(app);