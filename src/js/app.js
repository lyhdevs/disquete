import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { agregarListaCategorias } from "./main.js";
import { poblarGaleriaOutfits } from "./outfitsPoblar.js";
import { poblarGaleriaRopa } from "./galeriaPoblar.js";

/**************************************************/
/************* CONEXIÓN CON FIREBASE **************/
/**************************************************/
const firebaseConfig = {
  /** DATOS FIREBASE **/
  apiKey: "AIzaSyBBdK8E4y5aWChr2_ufui-45ks_FBXp9CU",
  authDomain: "disquete-galaxico.firebaseapp.com",
  projectId: "disquete-galaxico",
  storageBucket: "disquete-galaxico.appspot.com",
  messagingSenderId: "840893757065",
  appId: "1:840893757065:web:8bf72180cfe01d9ae33858",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/**************************************************/
/********** OBTENIENDO DATOS DE FIREBASE **********/
/**************************************************/

/**************** GET PRENDAS ****************/
let prendasDB = [];

getDocs(collection(db,'prendas')).then((snapshot) => {
  snapshot.docs.map((doc) => {
    prendasDB.push(doc.data());
  });

  poblarGaleriaRopa(prendasDB);
});

/**************** GET CATERGORIAS ****************/
let categoriasList = [];

getDocs(collection(db,'categorias')).then((snapshot) => {
  snapshot.docs.map((doc) => {
    categoriasList.push(doc.data());
  });

  agregarListaCategorias(categoriasList);
});

/**************** GET OUTFITS ****************/
let outfitsDB = [];

getDocs(collection(db,'outfits')).then((snapshot) => {
  snapshot.docs.map((doc) => {
    outfitsDB.push(doc.data());
  });

  poblarGaleriaOutfits(outfitsDB);
});


export { prendasDB, categoriasList };