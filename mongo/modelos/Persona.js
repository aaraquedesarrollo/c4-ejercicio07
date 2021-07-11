const { Schema, model, SchemaTypes } = require("mongoose");
const { PuntosVacunacionSchema } = require("./PuntosVacunacion");
const { VacunaSchema } = require("./Vacuna");

const validarDosis = (valor) => valor.length <= 2;

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
    type: SchemaTypes.ObjectId,
    required: true,
  },
  vacuna: { type: SchemaTypes.ObjectId, ref: "Vacuna", required: true },
  vacunas: {
    type: [Date],
    validate: [validarDosis, "No se pueden poner mas vacunas."],
  },
});

const Persona = model("Persona", PersonaSchema, "persona");

module.exports = Persona;
