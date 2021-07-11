const { Schema, model } = require("mongoose");
const { LocalizacionSchema } = require("./Localizacion");
const { Vacuna, VacunaSchema } = require("./Vacuna");

const PuntosVacunacionSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  localizacion: LocalizacionSchema,
  vacunas: [VacunaSchema],
});

module.exports = {
  PuntosVacunacionSchema,
};
