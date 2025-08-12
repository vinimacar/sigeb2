
// Configuração do Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyDidYV8Fsv77qlg16UyofbbHZ3IGSAdCKQ",
    authDomain: "sigeb2-397a1.firebaseapp.com",
    projectId: "sigeb2-397a1",
    storageBucket: "sigeb2-397a1.firebasestorage.app",
    messagingSenderId: "1073423701447",
    appId: "1:1073423701447:web:f3e23c19fab1f299a5b5e2"
};

// ATENÇÃO: Este arquivo deve ser usado com Firebase carregado via CDN em <script> no HTML
// Exemplo de inclusão no HTML antes deste arquivo:
// <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js"></script>

// Inicializa Firestore global (compat)
if (!window.firebaseApp) {
  // Configure seu firebaseConfig aqui ou garanta que já foi inicializado no HTML
  // window.firebase.initializeApp(firebaseConfig);
  window.firebaseApp = window.firebase.app();
}
const db = window.firebase.firestore();

// Função para buscar usuários do completarCadastro
window.getUsersFromCompletarCadastro = async function() {
    const usersSnapshot = await db.collection('completarCadastro').get();
    const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return usersList;
}

// Função para adicionar usuário
window.addUserToDatabase = async function(user) {
    try {
        await db.collection('usuarios').add(user);
    } catch (error) {
        console.error('Error adding user to database:', error);
    }
}

// Função para adicionar livro ao inventário
window.addBookToInventory = async function(livro) {
    try {
        await db.collection('inventario').add(livro);
    } catch (error) {
        console.error('Erro ao adicionar livro ao inventário:', error);
        throw error;
    }
}
