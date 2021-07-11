const { Schema, model } = require("mongoose");
const { LocalizacionSchema } = require("./Localizacion");
const Vacuna = require("./Vacuna");

const PuntosVacunacionSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  localizacion: LocalizacionSchema,
  vacunas: [Vacuna],
});

module.exports = {
  PuntosVacunacionSchema,
};
