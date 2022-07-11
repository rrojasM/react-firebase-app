// IMPORTAMOS FUNCION QUE INICIALIZA FIREBASE
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// CONFIGURACIÓN DE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyA2FhEeOJYQqtuhRXlmTrw9c_oonM_qay0",
  authDomain: "fir-react-90f32.firebaseapp.com",
  projectId: "fir-react-90f32",
  storageBucket: "fir-react-90f32.appspot.com",
  messagingSenderId: "645910012713",
  appId: "1:645910012713:web:4704978dfeb4e9bf344d38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db; 