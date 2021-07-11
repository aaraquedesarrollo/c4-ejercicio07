const Ciudad = require("../modelos/Ciudad");

const getCentrosVacunacion = async (idCiudad) => {
  const { puntosVacunacion } = await Ciudad.findById(idCiudad);
  return puntosVacunacion;
};

module.exports = {
  getCentrosVacunacion,
};
