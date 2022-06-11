import { poblarGaleriaRopa } from "./galeriaPoblar.js";
import data from "../data/prendas.js";
import { ordenarYPoblar, filtrarYPoblar, buscarYPoblar } from "./galeriaFunciones.js"

poblarGaleriaRopa(data.ropa);

/**************************************************/
/* AGREGANDO FUNCIONALIDADES DE FILTRO Y BÙSQUEDA */
/**************************************************/

//ORDENAR A->Z y Z->A
const ordenAZ = document.getElementById("az");
const ordenZA = document.getElementById("za");

ordenAZ.addEventListener("click", (e) => ordenarYPoblar(e, data.ropa, "az"));
ordenZA.addEventListener("click", (e) => ordenarYPoblar(e, data.ropa, "za"));


//FILTRAR POR CATEGORIA, ESTACIÓN
const filtroCategoria = document.getElementById("categoria");
const filtroEstacion = document.getElementById("estacion");

filtroCategoria.addEventListener("click", (e) =>
  filtrarYPoblar(e, data.ropa, "category")
);
filtroEstacion.addEventListener("click", (e) =>
  filtrarYPoblar(e, data.ropa, "season")
);

// BUSCAR UNA PRENDA (POR CUALQUIER ATRIBUTO
const btnBuscar = document.querySelector("#btn-buscar");

btnBuscar.addEventListener("click", (e) => buscarYPoblar(e, data.ropa));