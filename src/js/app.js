import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { poblarGaleriaRopa } from "/src/js/galeriaPoblar.js";

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
    appId: "1:840893757065:web:8bf72180cfe01d9ae33858"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getPrendas(db) {
  const prendasCol = collection(db, "prendas");
  const prendasSnapshot = await getDocs(prendasCol);
  const prendasList = prendasSnapshot.docs.map(doc => doc.data());

  return prendasList;
}

export const prendasDB = await getPrendas(db);
console.log(db);
poblarGaleriaRopa(prendasDB);