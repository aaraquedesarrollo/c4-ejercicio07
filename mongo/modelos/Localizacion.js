const { Schema, model } = require("mongoose");

const LocalizacionSchema = new Schema({
  coordenadas: {
    type: [Number],
    required: true,
  },
  direccion: String,
});

module.exports = {
  LocalizacionSchema,
};
