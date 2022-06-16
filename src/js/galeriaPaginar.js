const itemsPorPagina = 6;

export function mostrarItemsPorPagina(numPagina) {

  let items = document.getElementById("galeria-dg").childNodes;

  //Validar la página seleccionada
  if (numPagina < 1) numPagina = 1;
  if (numPagina > totalPaginas(items.length)) numPagina = totalPaginas(items.length);

  for (let i = 0; i < items.length; i++) {
    items[i] ? items[i].style.display = "none" : null;
  }

  for (let i = (numPagina - 1) * itemsPorPagina; i < numPagina * itemsPorPagina; i++) {
    items[i] ? items[i].style.display = "block" : null;
  }
}

/** CALCULAR TOTAL DE PÁGINAS SEGÚN LOS ITEMS LISTADOS **/
export function totalPaginas(itemsLength) {
  let totPaginas = 0;

  if (itemsLength > 0) {
    totPaginas = Math.ceil(itemsLength / itemsPorPagina);
  }

  return totPaginas;
}

export function seleccionarPagina(e, totPaginas) {
  let paginaSeleccionada = e.target.textContent;
  let paginasItems = document.querySelectorAll(".page-item");

  paginasItems.forEach((item) => {
    item.classList.remove("active");
  });
  document.getElementById(`pag-${paginaSeleccionada}`).classList.add("active");

  if (paginaSeleccionada < 1 || paginaSeleccionada > totPaginas) return false;

  mostrarItemsPorPagina(paginaSeleccionada);
}
