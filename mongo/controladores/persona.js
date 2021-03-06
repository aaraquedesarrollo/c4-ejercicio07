const { SchemaTypes } = require("mongoose");
const Persona = require("../modelos/Persona");

const crearRegistroPersona = async (registro) => {
  try {
    const persona = await Persona.create(registro);
    return persona;
  } catch (error) {
    console.log(`error al crear el registro: ${error.message}`);
  }
};

const listarPersonaPorDni = async (dni) => {
  const persona = await Persona.find()
    .where("dni")
    .eq(dni.toUpperCase())
    .populate("ciudades");
  return persona;
};

const modificarPersonaVacunada = async (id, modificaciones) => {
  try {
    const modificarPersona = await Persona.findByIdAndUpdate(
      id,
      modificaciones
    );
    const personaModificada = await Persona.findById(id);
    return personaModificada;
  } catch (error) {
    console.log(`Error al modificar persona: ${error.message}`);
  }
};
const eliminarRegistroPersona = async (id) => {
  try {
    const peronsalEliminada = await Persona.findByIdAndDelete(id);
    return peronsalEliminada;
  } catch (error) {
    console.log(`Error al eliminar registro ${error.message}`);
  }
};

const listarPersonasVacunadasCiudad = async (idCiudad) => {
  const personasVacunadas = await Persona.find();
  return personasVacunadas;
};
const anyadirVacunaApersona = async (dni, fecha) => {
  const persona = await listarPersonaPorDni(dni);
  const anyadirVacuna = await Persona.findByIdAndUpdate(
    { _id: persona[0]._id },
    {
      $push: { vacunas: fecha },
    }
  );
  return anyadirVacuna;
};

module.exports = {
  anyadirVacunaApersona,
  eliminarRegistroPersona,
  modificarPersonaVacunada,
  crearRegistroPersona,
  listarPersonaPorDni,
  listarPersonasVacunadasCiudad,
};
