import data from "../data/ropa/ropa.js";
import { filtrar } from "./helpers/filtros.js";
import { whatsappMessage } from "./helpers/mensajes.js";

/* Variables Globales */
export let resultado = document.getElementById("resultado");
export let msgOops = "<p>Ooops, no encontramos tu prenda 🤭</p>";

/*** FUNCIONALIDAD LIMPIAR BUSQUEDA ***/
export function limpiarBusqueda() {
  resultado.innerHTML = "";
  document.getElementById("galeria-dg").innerHTML = "";
  document.getElementById("item-buscado").value = "";
}

/*** FUNCIONALIDADES DE LA TARJETA "PRENDA" ***/
/* Botón "Más info": muestra información completa de la prenda
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
    itemAComprar = filtrar(data.ropa, id, "id")[0];

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
    prenda.classList.add("ropa-item", "col-md-4");
    prenda.innerHTML = `
          <div class="card mb-4 box-shadow card-front" id="card-${prendasResultado[j].id}-f">
              <img class="card-img-top" src="${prendasResultado[j].img}"/>
              <div class="card-body">
                <h3>${prendasResultado[j].name}</h3> 
                <p>${prendasResultado[j].description}</p> 
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
              <h3>${prendasResultado[j].name}</h3>
              <p>Descripción: ${prendasResultado[j].description}</p>
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

/** POBLAR LA GALERIA DE ROPA **/
/* Limpiar los resultados de búsqueda
 * Crear Galería
 * Agregar funcionalidades a cada tarjeta de prenda */
export function poblarGaleriaRopa(db) {
  limpiarBusqueda();
  galeriaRopa(db);
  agregarBtnComprar();
  agregarBtnInfo();
}
