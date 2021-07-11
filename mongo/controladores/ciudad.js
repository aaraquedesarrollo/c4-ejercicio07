const Ciudad = require("../modelos/Ciudad");

const getCentrosVacunacion = async (idCiudad) => {
  const { puntosVacunacion } = await Ciudad.findById(idCiudad);
  return puntosVacunacion;
};

const anyadirVacunaACentro = async (idVacuna, idCentro) => {
  const centroModificado = await Ciudad.updateOne();
};

module.exports = {
  getCentrosVacunacion,
};
