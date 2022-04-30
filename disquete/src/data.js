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

  categoria: function (ropa, value) {
    const filterR = ropa.filter((item) => {
      if (item.category.includes(value)) {
        return true
      } else
        return false;
    })
    return filterR;
  },
  estacion: function (ropa, value) {
    const filterT = ropa.filter((item) => {
      if (item.season.includes(value)) {
        return true
      } else
        return false;
    })
    return filterT;
  },
}