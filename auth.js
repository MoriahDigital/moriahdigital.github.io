import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const registerMessage = document.getElementById("registerMessage");
const loginMessage = document.getElementById("loginMessage");

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "clients", userCredential.user.uid), {
        name,
        phone,
        email,
        createdAt: new Date().toISOString()
      });

      registerMessage.textContent = "Compte créé avec succès. Redirection...";
      registerMessage.classList.remove("error-message");

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1200);
    } catch (error) {
      registerMessage.textContent = "Erreur : " + error.message;
      registerMessage.classList.add("error-message");
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      loginMessage.textContent = "Connexion réussie. Redirection...";
      loginMessage.classList.remove("error-message");

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    } catch (error) {
      loginMessage.textContent = "Erreur : " + error.message;
      loginMessage.classList.add("error-message");
    }
  });
}
