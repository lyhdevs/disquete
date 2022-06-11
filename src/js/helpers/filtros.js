/* ORDENAR DE FORMA ALFABETICA */
export const ordenar = {
  az: function (ropaBD) {
    return ropaBD.sort((ropaA, ropaB) => {
      
      if (ropaA.name > ropaB.name) {
        return 1;
      }
      if (ropaA.name < ropaB.name) {
        return -1;
      }
      return 0;
    });
  },
  za: function (ropaBD) {
    return ropaBD.sort((ropaA, ropaB) => {
      if (ropaA.name < ropaB.name) {
        return 1;
      }
      if (ropaA.name > ropaB.name) {
        return -1;
      }
      return 0;
    });
  },
};

/* FILTRAR POR CUALQUIER ATRIBUTO */
export const filtrar = (ropaBD, value, filtrarPor) => {
  const result = ropaBD.filter((item) => {
    if(item[filtrarPor].toLowerCase().includes(value)){
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
    filtrar(ropaBD, item, "name")
  );
  resultadoDeBusqueda = resultadoDeBusqueda.concat(
    filtrar(ropaBD, item, "category")
  );
  resultadoDeBusqueda = resultadoDeBusqueda.concat(
    filtrar(ropaBD, item, "season")
  );
  resultadoDeBusqueda = resultadoDeBusqueda.concat(
    filtrar(ropaBD, item, "material")
  );
  resultadoDeBusqueda = resultadoDeBusqueda.concat(
    filtrar(ropaBD, item, "description")
  );

  if (resultadoDeBusqueda.length > 0) {
    return resultadoDeBusqueda;
  } else 
    return -1;
}