import { poblarGaleriaRopa } from "./galeriaPoblar.js";
import { ordenarYPoblar, filtrarYPoblar, buscarYPoblar } from "./galeriaFunciones.js"
import { prendasDB } from "./app.js";

/**************************************************/
/* AGREGANDO FUNCIONALIDADES DE FILTRO Y BÙSQUEDA */
/**************************************************/

//ORDENAR A->Z y Z->A
const ordenAZ = document.getElementById("az");
const ordenZA = document.getElementById("za");

ordenAZ.addEventListener("click", (e) => ordenarYPoblar(e, prendasDB, "az"));
ordenZA.addEventListener("click", (e) => ordenarYPoblar(e, prendasDB, "za"));


//FILTRAR POR CATEGORIA, ESTACIÓN
const filtroCategoria = document.getElementById("categoria");
const filtroTemporada = document.getElementById("temporada");

filtroCategoria.addEventListener("click", (e) =>
  filtrarYPoblar(e, prendasDB, "categoria")
);
filtroTemporada.addEventListener("click", (e) =>
  filtrarYPoblar(e, prendasDB, "temporada")
);

// BUSCAR UNA PRENDA (POR CUALQUIER ATRIBUTO
const btnBuscar = document.querySelector("#btn-buscar");

btnBuscar.addEventListener("click", (e) => buscarYPoblar(e, prendasDB));