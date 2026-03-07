import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAuC2URKTGD6MrnmkdSD3xTKcyS5BPE0e0",
  authDomain: "moriahdigital-141f4.firebaseapp.com",
  projectId: "moriahdigital-141f4",
  storageBucket: "moriahdigital-141f4.appspot.com",
  messagingSenderId: "743291676320",
  appId: "1:743291676320:web:baf76020c1e36cc5440bc5",
  measurementId: "G-PES2PBLM6S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
