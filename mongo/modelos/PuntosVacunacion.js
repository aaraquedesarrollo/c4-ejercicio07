const { Schema, model } = require("mongoose");
const { LocalizacionSchema } = require("./Localizacion");

const PuntosVacunacionSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  localizacion: LocalizacionSchema,
  vacunas: Array,
});

module.exports = {
  PuntosVacunacionSchema,
};
