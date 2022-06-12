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
  let resultadoDeBusqueda = [];
  resultadoDeBusqueda = resultadoDeBusqueda.concat(
    filtrar(ropaBD, item, "nombre")
  );
  resultadoDeBusqueda = resultadoDeBusqueda.concat(
    filtrar(ropaBD, item, "categoria")
  );
  resultadoDeBusqueda = resultadoDeBusqueda.concat(
    filtrar(ropaBD, item, "temporada")
  );
  resultadoDeBusqueda = resultadoDeBusqueda.concat(
    filtrar(ropaBD, item, "material")
  );
  resultadoDeBusqueda = resultadoDeBusqueda.concat(
    filtrar(ropaBD, item, "descripcion")
  );

  if (resultadoDeBusqueda.length > 0) {
    return resultadoDeBusqueda;
  } else 
    return -1;
}