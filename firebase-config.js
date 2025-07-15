const firebaseConfig = {
  apiKey: "AIzaSyCkttFoV_FoPn91ClE7xFiknFvs9pXaCoQ",
  authDomain: "sigeb-ccd3f.firebaseapp.com",
  databaseURL: "https://sigeb-ccd3f-default-rtdb.firebaseio.com",
  projectId: "sigeb-ccd3f",
  storageBucket: "sigeb-ccd3f.appspot.com",
  messagingSenderId: "209689711066",
  appId: "1:209689711066:web:5a99505e60bd34f29b70e3",
  measurementId: "G-VJBDW2B7HZ"
};

// Antes de usar 'firebase', garanta que o SDK foi carregado
if (typeof firebase === "undefined") {
  throw new Error("Firebase SDK não carregado. Verifique a ordem dos <script> no HTML.");
}

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const analytics = firebase.analytics();
