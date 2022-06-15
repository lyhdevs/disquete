import { prendasDB } from "./app.js";
import { ordenarYPoblar, filtrarYPoblar, buscarYPoblar } from "./galeriaFunciones.js"
import { ordenarDinamico } from "./helpers/ordenar.js"

/**************************************************/
/******* AGREGANDO LAS CATEGORÍAS EXISTENTE *******/
/**************************************************/
export function agregarListaCategorias(categoriasList) {
  let categoriaElement = document.getElementById("categoria");

  categoriasList.sort(ordenarDinamico("nombre"));
  categoriasList.forEach(categoria => {
    
    let categoriaItem = document.createElement("a");
    categoriaItem.classList.add("dropdown-item");
    categoriaItem.setAttribute("id", categoria.nombre);

    let categoriaNombre = document.createTextNode(categoria.nombre);
    categoriaItem.appendChild(categoriaNombre);
    categoriaElement.appendChild(categoriaItem);
  });
}

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