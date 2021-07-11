const { Schema, model, SchemaTypes } = require("mongoose");
const { LocalizacionSchema } = require("./Localizacion");

const PuntosVacunacionSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  localizacion: LocalizacionSchema,
  vacunas: [SchemaTypes.ObjectId],
});

module.exports = {
  PuntosVacunacionSchema,
};
