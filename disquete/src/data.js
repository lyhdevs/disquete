export const ordenar = {
  az: function (ropa) {
    return ropa.sort((ropaA, ropaB) => {
      
      if (ropaA.name > ropaB.name) {
        return 1;
      }
      if (ropaA.name < ropaB.name) {
        return -1;
      }
      return 0;
    });
  },
  za: function (ropa) {
    return ropa.sort((ropaA, ropaB) => {
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
export const functionFilter = {
  busqueda: function (ropa, value) {
    const filterB = ropa.filter((item) => {
      if (item.name.toLowerCase().includes(value) || item.category.toLowerCase().includes(value) || item.season.toLowerCase().includes(value)) {
        return true;
      } else
        return false;
    })
    return filterB;
  },
  itemById: function (ropa, value) {
    let itemById = ropa.filter((item) => {
      if (item.id.toLowerCase().includes(value)) {
        return "hello";
      } else
        return false;
    });
    return itemById[0];
  },
}

export const filtrar = (ropaBD, value, filtrarPor) => {
  const result = ropaBD.filter((item) => {
    if(item[filtrarPor].includes(value)){
      return true;
    } else {
      return false;
    }
  });

  return result;
}