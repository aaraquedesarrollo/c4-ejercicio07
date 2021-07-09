const Persona = require("../modelos/Persona");

const crearRegistroPersona = async (dni, nombre, apellidos, edad) => {
  const persona = await Persona.create({
    nombre,
    apellidos,
    dni: dni.toUpperCase(),
    edad,
  });
  return persona;
};

const listarPersonas = async (dni, nombre, apellidos, edad) => {
  const persona = await Persona.find();
  return persona;
};

module.exports = {
  crearRegistroPersona,
  listarPersonas,
};
