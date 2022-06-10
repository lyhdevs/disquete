import { ordenar, functionFilter } from "./data.js";
import data from "./data/ropa/ropa.js";

//Poblando Galería de Ropa
function ropaDetalle(prendasResultado) {
  for (let j = 0; j < prendasResultado.length; j++) {
    let ropa = document.createElement("div");
    ropa.classList.add("col-md-4");
    ropa.innerHTML = `
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
    document.getElementById("galeria-dg").appendChild(ropa);
  }
}
ropaDetalle(data.ropa);
agregarBtnComprar();
agregarBtnInfo();

//Buscar una prenda por nombre, categoría o temporada
const resultado = document.getElementById("resultado");
const btnBuscar = document.querySelector("#btn-buscar");

btnBuscar.addEventListener("click", (e) => {
  e.preventDefault();
  resultado.innerHTML = "";
  let item = document.getElementById("item-buscado").value.toLowerCase();

  if (item) {
    let buscados = functionFilter.busqueda(data.ropa, item);
    document.getElementById("galeria-dg").innerHTML = "";
    if (buscados.length) {
      ropaDetalle(buscados);
      agregarBtnComprar();
      agregarBtnInfo();
    } else {
      resultado.innerHTML += "<p>Ooops, no encontramos tu prenda 🤭</p>";
    }
  }
});

//Limpiar busqueda
function limpiarBusqueda() {
  resultado.innerHTML = "";
  document.getElementById("item-buscado").value = "";
}

//click a ordenar az
document.getElementById("az").addEventListener("click", function (e) {
  e.preventDefault();
  limpiarBusqueda();
  //ordenar data
  let ordenAz = ordenar.az(data.ropa);
  //limpiar pantalla
  document.getElementById("galeria-dg").innerHTML = "";
  //ordenado
  ropaDetalle(ordenAz);

  agregarBtnComprar();
  agregarBtnInfo();
});

// //click a ordenar za
document.getElementById("za").addEventListener("click", function (e) {
  e.preventDefault();
  limpiarBusqueda();
  //ordenar data
  let ordenZa = ordenar.za(data.ropa);
  //limpiar pabtalla
  document.getElementById("galeria-dg").innerHTML = "";
  //ordenado
  ropaDetalle(ordenZa);
  agregarBtnComprar();
agregarBtnInfo();
});

//FILTRAR CATEGORIA
const filterRegion = document.querySelector("#categoria");
filterRegion.addEventListener("click", function (e) {
  e.preventDefault();
  limpiarBusqueda();
  const value = e.target.id;
  let filtrando = functionFilter.categoria(data.ropa, value);
  document.getElementById("galeria-dg").innerHTML = "";
  ropaDetalle(filtrando);
  agregarBtnComprar();
agregarBtnInfo();
});
//FILTRAR ESTACION
const filterEstacion = document.querySelector("#estacion");
filterEstacion.addEventListener("click", function (e) {
  e.preventDefault();
  limpiarBusqueda();

  const value = e.target.id;
  let filtrando = functionFilter.estacion(data.ropa, value);
  document.getElementById("galeria-dg").innerHTML = "";
  ropaDetalle(filtrando);
  agregarBtnComprar();
agregarBtnInfo();
});

/*** FUNCIONALIDADES DE LA TARJETA "PRENDA" ***/
//Funcionalidad "Más info"
function agregarBtnInfo(){
  let botonesMasInfo = document.getElementsByClassName("btn-mas-info");
  for (let i = 0; i < botonesMasInfo.length; i++) {
 
    botonesMasInfo[i].addEventListener("click", function (e) {
      e.preventDefault();
      //Obtener el item a mostrar más info
      let id = botonesMasInfo[i].getAttribute("value");
      let cardFront = document.getElementById(`card-${id}-f`);
      let cardBack = document.getElementById(`card-${id}-b`);
  
      if (cardFront.style.display  === "none") {
        cardFront.style.display = "block";
        cardBack.style.display = "none";
      } else {
        cardFront.style.display = "none";
        cardBack.style.display = "block";
      }
    });
  }  
}

//Funcionalidad "Comprar"
function agregarBtnComprar() {
  let itemAComprar = "";
  let botonesComprar = document.getElementsByClassName("btn-comprar");
  
  for (let i = 0; i < botonesComprar.length; i++) {
    //Obtener el item a comprar
    let id = botonesComprar[i].getAttribute("value");
  
    itemAComprar = functionFilter.itemById(data.ropa, id);
  
    //Mensaje a enviar a whatsapp
    let whatsappNumber = "";
    let message = `Holaaa Disquete Galaxico. Me encanta el/la *${itemAComprar.name}* (cod: ${itemAComprar.id}), quiero comprarlo/a Yaa! :)`;
    let whatsapp = `https://wa.me/${whatsappNumber}?text=${message}`;
  
    botonesComprar[i].setAttribute("href", whatsapp);
  }
}