import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
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

async function getPrendas(db) {
  const prendasCol = collection(db, "prendas");
  const prendasSnapshot = await getDocs(prendasCol);
  const prendasList = prendasSnapshot.docs.map((doc) => doc.data());

  return prendasList;
}

export const prendasDB = await getPrendas(db);
poblarGaleriaRopa(prendasDB);

/**************** GET CATERGORIAS ****************/
export async function getCategorias(db) {
  const categoriasCol = collection(db, "categorias");
  const categoriasSnapshot = await getDocs(categoriasCol);
  const categoriasList = categoriasSnapshot.docs.map((doc) => doc.data());

  return categoriasList;
}

export const categoriasList = await getCategorias(db);

/**************** GET OUTFITS ****************/
export async function getOutfits(db) {
  const outfitsCol = collection(db, "outfits");
  const outfitsSnapshot = await getDocs(outfitsCol);
  const outfitsList = outfitsSnapshot.docs.map((doc) => doc.data());

  return outfitsList;
}

const outfitsDB = await getOutfits(db);
poblarGaleriaOutfits(outfitsDB);