import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAuC2URKTGD6MrnmkdSD3",
  authDomain: "moriahdigital-141f4.firebaseapp.com",
  projectId: "moriahdigital-141f4",
  storageBucket: "moriahdigital-141f4.appspot.com",
  messagingSenderId: "743291676320",
  appId: "1:743291676320:web:baf76020"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
