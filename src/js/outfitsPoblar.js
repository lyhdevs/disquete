import { filtrar } from "./helpers/filtros.js";
import { whatsappMessage } from "./helpers/mensajes.js";

/** FUNCIONALIDAD CREAR GALERIA CON TODOS LOS OUTFITS **/
export function galeriaOutfits(outfitsDB) {
  for (let i = 0; i < outfitsDB.length; i++) {
    let outfit = outfitsDB[i];
    let outfitElement = document.createElement("div");
    let itemElements = "";

    outfitElement.setAttribute("id", `outfit-${outfit.id}`);
    outfitElement.classList.add("carousel-item", "row");
    i === 0 ? outfitElement.classList.add("active") : null;

    for (let j = 0; j < outfit.items.length; j++) {
      itemElements += `<li>💾 ${outfit.items[j]}</li>`;
    }

    outfitElement.innerHTML = `
            <div class="row align-items-center">
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <img class="outfit-img"
                    src="${outfit.imgUrl}" />
                </div>
                <div class="col-md-5 col-sm-6 col-xs-6">
                    <div class="outfit-info">
                        <h4>${outfit.nombre}</h4>
                        <h5>${outfit.descripcion}</h5>
                        ${itemElements}
                        <p>${outfit.nota}</p>
                        <a type="button" class="rosa-btn btn-comprar-o" target="_blank" value="${outfit.id}">Lo quiero!</a>
                    </div>
                </div>
            </div>`;

    document.getElementById("galeria-outfits").appendChild(outfitElement);
  }
}

//TODO: esta funcion realiza lo mismo que agregarBtn
function agregarBtnComprarOutfit(outfitsDB) {
    let itemAComprar = "";
    let botonesComprar = document.getElementsByClassName("btn-comprar-o");

    for (let i = 0; i < botonesComprar.length; i++) {
        let id = botonesComprar[i].getAttribute("value");
        itemAComprar = filtrar(outfitsDB, id, "id")[0];

        let whatsappLink = whatsappMessage("outfit", itemAComprar);
        botonesComprar[i].setAttribute("href", whatsappLink);
    }
}

/*** FUNCIONALIDAD GALERIA NO ENCONTRADA ***/
function outfitsNoEncontrados() {
    document.getElementById("services").style.display = "none";
}

/** POBLAR LA SECCIÓN DE OUTFITS **/
/* Crear Galería
 * Agregar funcionalidad de enviar mensaje */
export function poblarGaleriaOutfits(db) {
  db.length > 0 ? galeriaOutfits(db) : outfitsNoEncontrados();
  agregarBtnComprarOutfit(db); 
}