/* ORDENAR DE FORMA ALFABETICA */
export const ordenar = {
  az: function (ropaBD) {
    return ropaBD.sort((ropaA, ropaB) => {
      
      if (ropaA.nombre > ropaB.nombre) {
        return 1;
      }
      if (ropaA.nombre < ropaB.nombre) {
        return -1;
      }
      return 0;
    });
  },
  za: function (ropaBD) {
    return ropaBD.sort((ropaA, ropaB) => {
      if (ropaA.nombre < ropaB.nombre) {
        return 1;
      }
      if (ropaA.nombre > ropaB.nombre) {
        return -1;
      }
      return 0;
    });
  },
};

/* FILTRAR POR CUALQUIER ATRIBUTO */
export const filtrar = (ropaBD, value, filtrarPor) => {
  const result = ropaBD.filter((item) => {

    if(item[filtrarPor].toLowerCase().includes(value.toLowerCase())){
      return true;
    } else {
      return false;
    }
  });

  return result;
}

/* BUSCAR EN TODOS LOS ATRIBUTO */
export function buscar(ropaBD, item) {
  let prendasEncontradas = [];

  prendasEncontradas = prendasEncontradas.concat(
    filtrar(ropaBD, item, "nombre")
  );

  prendasEncontradas = prendasEncontradas.concat(
    filtrar(ropaBD, item, "categoria")
  );

  prendasEncontradas = prendasEncontradas.concat(
    filtrar(ropaBD, item, "temporada")
  );
  prendasEncontradas = prendasEncontradas.concat(
    filtrar(ropaBD, item, "material")
  );

  prendasEncontradas = prendasEncontradas.concat(
    filtrar(ropaBD, item, "descripcion")
  );

  let resultadoDeBusqueda = [...new Map(prendasEncontradas.map((prenda) => [prenda["id"], prenda])).values()];


  if (resultadoDeBusqueda.length > 0) {
    return resultadoDeBusqueda;
  } else 
    return -1;
}