import { ordenar, functionFilter } from "./data.js";
import data from "./data/ropa/ropa.js";
//Poblando Galería de Ropa
function ropaDetalle(prendasResultado) {
  for (let j = 0; j < prendasResultado.length; j++) {
    let ropa = document.createElement("div");
    ropa.classList.add("col-md-4");
    ropa.innerHTML = `
      <div class="card mb-4 box-shadow">
        <img class="card-img-top" src="${prendasResultado[j].img}"/>
          <div class="card-body">
          <h3>${prendasResultado[j].name}</h3> 
          <h3>${prendasResultado[j].category}</h3> 
          <h3>${prendasResultado[j].season}</h3> 
         
         
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-info">Ver + Info</button>
              <button type="button" class="btn btn-sm btn-light">Comprar</button>
            </div>
          </div>
        </div>
        <div class="modal">
        <h3>${prendasResultado[j].name}</h3> 
          <h3>${prendasResultado[j].category}</h3> 
          <h3>${prendasResultado[j].season}</h3> 
        </div>
      </div>
         `;
    document.getElementById("galeria-dg").appendChild(ropa);
  }
}
ropaDetalle(data.ropa);
  
//Buscar una prenda por nombre, categoría o temporada
const resultado = document.getElementById('resultado');
const btnBuscar = document.querySelector('#btn-buscar');


btnBuscar.addEventListener('click', (e) => {
  e.preventDefault();
  resultado.innerHTML = "";
  let item = document.getElementById('item-buscado').value.toLowerCase();

  if (item) {
    let buscados = functionFilter.busqueda(data.ropa, item);
    document.getElementById('galeria-dg').innerHTML = "";
    if(buscados.length){
      ropaDetalle(buscados);
    } else {
      resultado.innerHTML += "<p>Ooops, no encontramos tu prenda 🤭</p>";
    }
  }
});

//Limpiar busqueda
function limpiarBusqueda(){
  resultado.innerHTML = "";
  document.getElementById('item-buscado').value = "";
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
});

//FILTRAR CATEGORIA
const filterRegion = document.querySelector('#categoria');
filterRegion.addEventListener('click', function (e) {
  e.preventDefault();
  limpiarBusqueda();
  const value = e.target.id;
  let filtrando = functionFilter.categoria(data.ropa, value);
  document.getElementById('galeria-dg').innerHTML = "";
  ropaDetalle(filtrando);
});
//FILTRAR ESTACION
const filterEstacion = document.querySelector('#estacion');
filterEstacion.addEventListener('click', function (e) {
  e.preventDefault();
  limpiarBusqueda();

  const value = e.target.id;
  let filtrando = functionFilter.estacion(data.ropa, value);
  document.getElementById('galeria-dg').innerHTML = "";
  ropaDetalle(filtrando);
});


