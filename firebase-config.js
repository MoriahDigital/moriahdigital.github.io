import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "REMPLACE_ICI",
  authDomain: "REMPLACE_ICI",
  projectId: "REMPLACE_ICI",
  storageBucket: "REMPLACE_ICI",
  messagingSenderId: "REMPLACE_ICI",
  appId: "REMPLACE_ICI"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
