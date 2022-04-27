import { ordenar, functionFilter } from "./data.js";
import data from "./data/ropa/ropa.js";
//jalando data
function pokemonDetalle(pokemonsResultado) {
  for (let j = 0; j < pokemonsResultado.length; j++) {
    let pokemon = document.createElement("div");
    pokemon.classList.add("col-md-4");
    pokemon.innerHTML = `
      <div class="card mb-4 box-shadow">
        <img class="card-img-top" src="${pokemonsResultado[j].img}"/>
          <div class="card-body">
          <h3>${pokemonsResultado[j].name}</h3> 
          <h3>${pokemonsResultado[j].tipo.name}</h3> 
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-info">Ver + Info</button>
              <button type="button" class="btn btn-sm btn-light">Comprar</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
         `;
    document.getElementById("galeria-dg").appendChild(pokemon);
  }
}
pokemonDetalle(data.pokemon);
//console.table(data.pokemon);
//busqueda
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const filtrar = (pokemon) => {
  resultado.innerHTML = "";
  const texto = formulario.value.toLowerCase();
  const busqueda = pokemon.filter(function (item) {
    if (item.name.includes(texto)) {
      return true;
    } else return false;
  });
  document.getElementById("pantalla1").innerHTML = "";
  pokemonDetalle(busqueda);
  if (busqueda.length === 0) {
    resultado.innerHTML += `
         <p>Pokemon no  encontrado...</p>
          `;
  }
};
boton.addEventListener("click", () => {
  filtrar(data.pokemon);
});

//FILTRAR GENERACION
const filterRegion = document.querySelector("#region");
filterRegion.addEventListener("click", function (e) {
  const value = e.target.id;
  let filtrando = functionFilter.generacion(data.pokemon, value);
  document.getElementById("pantalla1").innerHTML = "";
  pokemonDetalle(filtrando);
});
//filtrar tipos
const filtertype = document.querySelector("#tipos");
filtertype.addEventListener("click", function (e) {
  const value = e.target.id;
  let filtrando = functionFilter.tipos(data.pokemon, value);
  document.getElementById("pantalla1").innerHTML = "";
  pokemonDetalle(filtrando);
});
//click a ordenar az
document.getElementById("az").addEventListener("click", function () {
  //ordenar data
  let ordenAz = ordenar.az(data.pokemon);
  //limpiar pantalla
  document.getElementById("pantalla1").innerHTML = "";
  //ordenado
  pokemonDetalle(ordenAz);
});

//click a ordenar za
document.getElementById("za").addEventListener("click", function () {
  //ordenar data
  let ordenZa = ordenar.za(data.pokemon);
  //limpiar pabtalla
  document.getElementById("pantalla1").innerHTML = "";
  //ordenado
  pokemonDetalle(ordenZa);
});
