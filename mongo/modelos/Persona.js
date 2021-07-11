const { Schema, model, SchemaTypes } = require("mongoose");
const { PuntosVacunacionSchema } = require("./PuntosVacunacion");
const { VacunaSchema } = require("./Vacuna");

const validarDosis = (valor) => valor.length <= 2;

const PersonaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: String,
  dni: {
    type: String,
    unique: true,
    maxLength: 9,
  },
  edad: Number,
  centro_vacunacion: {
    type: Schema.Types.ObjectId,
    ref: "PuntosVacunacionSchema",
    required: true,
  },
  vacuna: { type: SchemaTypes.ObjectId, ref: "Vacuna" },
  vacunas: {
    type: [Date],
    validate: {
      validator: validarDosis,
      message: "No se pueden poner mas vacunas.",
    },
  },
});

const Persona = model("Persona", PersonaSchema, "persona");

module.exports = Persona;
