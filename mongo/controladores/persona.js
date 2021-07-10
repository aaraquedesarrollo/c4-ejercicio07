const Persona = require("../modelos/Persona");

const crearRegistroPersona = async (dni, nombre, apellidos, edad) => {
  try {
    const persona = await Persona.create({
      nombre,
      apellidos,
      dni: dni.toUpperCase(),
      edad,
    });
    return persona;
  } catch (error) {
    console.log(`error al crear el registro: ${error.message}`);
  }
};

const listarPersonaPorDni = async (dni) => {
  const persona = await Persona.find().where("dni").eq(dni.toUpperCase());
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

module.exports = {
  eliminarRegistroPersona,
  modificarPersonaVacunada,
  crearRegistroPersona,
  listarPersonaPorDni,
};
