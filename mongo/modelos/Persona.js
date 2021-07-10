const { Schema, model } = require("mongoose");
const { PuntosVacunacionSchema } = require("./PuntosVacunacion");

const validarVacunas = (valor) => valor.length <= 2;

const PersonaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: String,
  dni: {
    type: String,
    unique: true,
    maxLength: 9,
  },
  edad: Number,
  centro_vacunacion: {
    type: PuntosVacunacionSchema,
    default: {},
    required: true,
  },
  vacunas: {
    type: [Date],
    validate: [validarVacunas, "No se pueden poner mas vacunas."],
  },
});

const Persona = model("Persona", PersonaSchema, "persona");

module.exports = Persona;
