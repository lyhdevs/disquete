import { ordenar, functionFilter } from "./data.js";
import data from "./data/ropa/ropa.js";
//jalando data
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
            <small class="text-muted">9 mins</small>
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
console.table(data.ropa);

   
//click a ordenar az
document.getElementById("az").addEventListener("click", function () {
  //ordenar data
  let ordenAz = ordenar.az(data.ropa);
  //limpiar pantalla
  document.getElementById("galeria-dg").innerHTML = "";
  //ordenado
  ropaDetalle(ordenAz);
});

// //click a ordenar za
document.getElementById("za").addEventListener("click", function () {
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
  const value = e.target.id;
  let filtrando = functionFilter.categoria(data.ropa, value);
  document.getElementById('galeria-dg').innerHTML = "";
  ropaDetalle(filtrando);
});
//FILTRAR ESTACION
const filterEstacion = document.querySelector('#estacion');
filterEstacion.addEventListener('click', function (e) {
  const value = e.target.id;
  let filtrando = functionFilter.estacion(data.ropa, value);
  document.getElementById('galeria-dg').innerHTML = "";
  ropaDetalle(filtrando);
});

//busqueda
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const filtrar = (ropa) => {
  resultado.innerHTML = '';
  const texto = formulario.value.toLowerCase();
  const busqueda = ropa.filter(function (item) {
    if (item.name.includes(texto)) {
      return true;
    } else
      return false;
  });
  document.getElementById('galeria-dg').innerHTML = "";
  ropaDetalle(busqueda);
  if (busqueda.length === 0) {
    resultado.innerHTML += `
         <p>Prenda no  encontrada...</p>
          `
  }
}
boton.addEventListener('click', () => {
  filtrar(data.ropa);
});
