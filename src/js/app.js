import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { poblarGaleriaRopa } from "/src/js/galeriaPoblar.js";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.API_KEY);

/**************************************************/
/************* CONEXIÓN CON FIREBASE **************/
/**************************************************/
const firebaseConfig = {
    /** DATOS FIREBASE **/
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
poblarGaleriaRopa(prendasDB);