import { prendasDB } from "./app.js";
import { limpiarBusqueda, limpiarPaginacion } from "./galeriaLimpiar.js";
import { seleccionarPagina, totalPaginas, mostrarItemsPorPagina } from "./galeriaPaginar.js";
import { filtrar } from "./helpers/filtros.js";
import { whatsappMessage } from "./helpers/mensajes.js";

/* Variables Globales */
export let resultado = document.getElementById("resultado");
export let msgOops = "<p>Ooops, no encontramos tu prenda 🤭</p>";

/** FUNCIONALIDAD CREAR PAGINACIÓN DE GALERĪA **
 * Calcular la cantidad de páginas y agregarlas
 * al item de paginación con el estilo correspon-
 * diente. **/
 function agregarPaginacion(itemsLength){
  let totPaginas = 0;


  let paginacionItem = document.getElementById("galeria-paginacion");
  
  totPaginas = totalPaginas(itemsLength);
  limpiarPaginacion();

  for (let i = 0; i < totPaginas; i++) {
    let numPagina = document.createElement("li");

    numPagina.setAttribute("id", `pag-${i+1}`);
    numPagina.classList.add("page-item");
    (i === 0) ? numPagina.classList.add("active") : "";
    numPagina.innerHTML = `<a class="page-link btn waves-effect waves-ligth">${i+1}</a>`;
    numPagina.addEventListener("click", e => seleccionarPagina(e, totPaginas));
    
    paginacionItem.appendChild(numPagina);
  }
  
  mostrarItemsPorPagina(1);
}
/*** FUNCIONALIDADES DE LA TARJETA "PRENDA" ***
 * Botón "Más info": muestra información completa de la prenda
 * Botón "Comprar": Envía un mensaje de whatsapp con el nombre de la prenda seleccionada */
export function agregarBtnInfo() {
  let botonesMasInfo = document.getElementsByClassName("btn-mas-info");
  for (let i = 0; i < botonesMasInfo.length; i++) {
    botonesMasInfo[i].addEventListener("click", function (e) {
      e.preventDefault();
      //Obtener el item a mostrar más info
      let id = botonesMasInfo[i].getAttribute("value");
      let cardFront = document.getElementById(`card-${id}-f`);
      let cardBack = document.getElementById(`card-${id}-b`);

      if (cardFront.style.display === "none") {
        cardFront.style.display = "block";
        cardBack.style.display = "none";
      } else {
        cardFront.style.display = "none";
        cardBack.style.display = "block";
      }
    });
  }
}

export function agregarBtnComprar() {
  let itemAComprar = "";
  let botonesComprar = document.getElementsByClassName("btn-comprar");

  for (let i = 0; i < botonesComprar.length; i++) {
    let id = botonesComprar[i].getAttribute("value");
    itemAComprar = filtrar(prendasDB, id, "id")[0];

    let whatsappLink = whatsappMessage("prenda", itemAComprar);
    botonesComprar[i].setAttribute("href", whatsappLink);
  }
}

/*** FUNCIONALIDAD PRENDA NO ENCONTRADA ***/
export function galeriaNoEncontrada() {
  limpiarBusqueda();
  resultado.innerHTML += msgOops;
}

/** FUNCIONALIDAD CREAR GALERIA CON TODOS LOS ITEMS O EL RESULTADO DE LA BUSQUEDA **/
export function galeriaRopa(prendasResultado) {
  for (let j = 0; j < prendasResultado.length; j++) {
    
    let prenda = document.createElement("div");
    prenda.setAttribute("id", `item-${prendasResultado[j].id}`);
    prenda.classList.add("ropa-item", "col-lg-4", "col-md-6", "col-sm-6");
    prenda.innerHTML = `
          <div class="card mb-3 box-shadow card-front" id="card-${prendasResultado[j].id}-f">
              <img class="card-img-top" src="${prendasResultado[j].imgUrl}"/>
              <div class="card-body">
                <h3>${prendasResultado[j].nombre}</h3> 
                <p>${prendasResultado[j].descripcion}</p> 
                <p>${prendasResultado[j].precio}</p> 
                <div class="justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-light btn-mas-info" value="${prendasResultado[j].id}">Ver + Info</button>
                    <a type="button" class="btn btn-sm btn-comprar" target="_blank" value="${prendasResultado[j].id}">Comprar</a>
                  </div>
                </div>
            </div>
          </div>
    
          <div class="card mb-4 box-shadow card-back" style="display: none;" id="card-${prendasResultado[j].id}-b">
            <div class="card-body">
              <h3>${prendasResultado[j].nombre}</h3>
              <p>Descripción: ${prendasResultado[j].descripcion}</p>
              <ul>
                <li>Material: ${prendasResultado[j].material}</li>
                <li>Tallas disponibles: ${prendasResultado[j].tallas}</li>
              </ul>
              <p>Enviamos a todo Perú 🇵🇪</p>
              <div class="justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-light btn-mas-info" value="${prendasResultado[j].id}">Lo amo</button>
                  </div>
                </div>
            </div>
          </div>
             `;
    document.getElementById("galeria-dg").appendChild(prenda);
  }
}

/** POBLAR LA GALERIA DE ROPA **
 * Limpiar los resultados de búsqueda
 * Crear Galería
 * Agregar funcionalidades a cada tarjeta de prenda */
export function poblarGaleriaRopa(db) {
  limpiarBusqueda();
  db.length > 0 ? galeriaRopa(db) : galeriaNoEncontrada();
  agregarBtnComprar();
  agregarBtnInfo();
  agregarPaginacion(db.length);
}