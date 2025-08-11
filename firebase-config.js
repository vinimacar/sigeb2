const firebaseConfig = {
  apiKey: "AIzaSyC558ddNk5dGkB-GgTxbnNVfcciiCwEQP8",
  authDomain: "biblitech-35d1c.firebaseapp.com",
  projectId: "biblitech-35d1c",
  storageBucket: "biblitech-35d1c.appspot.com",
  messagingSenderId: "972405171947",
  appId: "1:972405171947:web:acbc479d1410dff21480ae",
  measurementId: "G-4WQTEHF4DS"
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


