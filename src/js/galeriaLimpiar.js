/*** FUNCIONALIDAD LIMPIAR BUSQUEDA ***/
export function limpiarBusqueda() {
  resultado.innerHTML = "";
  document.getElementById("galeria-dg").innerHTML = "";
  document.getElementById("item-buscado").value = "";
}

/*** FUNCIONALIDAD LIMPIAR LISTA DE PAGINACIÓN ***/
export function limpiarPaginacion() {
  let paginacionItem = document.getElementById("galeria-paginacion");

  while (paginacionItem.firstChild) {
    paginacionItem.removeChild(paginacionItem.firstChild);
  }
}