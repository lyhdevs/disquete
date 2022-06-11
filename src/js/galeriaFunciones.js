import { ordenar, filtrar, buscar } from "./helpers/filtros.js";
import { galeriaNoEncontrada, poblarGaleriaRopa } from "./galeriaPoblar.js";

export function ordenarYPoblar(e, ropaBD, orden) {
  e.preventDefault();

  let resultadoOrdenado = ordenar[orden](ropaBD);
  poblarGaleriaRopa(resultadoOrdenado);
}

export function filtrarYPoblar(e, ropaBD, filtro) {
  e.preventDefault();

  const value = e.target.id.toLowerCase();
  
  poblarGaleriaRopa(filtrar(ropaBD, value, filtro));
}

export function buscarYPoblar(e, ropaBD){
  e.preventDefault();

  let resultadoBusqueda = [];
  let item = document.getElementById("item-buscado").value.toLowerCase();

  if (item) {
    resultadoBusqueda = buscar(ropaBD, item);
    resultadoBusqueda !== -1 ? poblarGaleriaRopa(resultadoBusqueda) : galeriaNoEncontrada();
  }

  return resultadoBusqueda;
}