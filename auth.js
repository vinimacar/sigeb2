import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
import { firebaseConfig } from './firebase-config.js'; // Certifique-se de ter este arquivo exportando seu config

// Inicialize o Firebase App apenas uma vez
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export function cadastrarUsuario(nome, email, senha, nivel) {
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      return set(ref(database, 'usuarios/' + user.uid), {
        nome: nome,
        email: email,
        nivel: nivel
      });
    })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
    })
    .catch((error) => {
      console.error(error);
      alert("Erro ao cadastrar usuário: " + error.message);
    });
}
