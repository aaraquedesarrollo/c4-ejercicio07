const { Schema, model } = require("mongoose");
const { PuntosVacunacionSchema } = require("./PuntosVacunacion");

const CiudadSchema = new Schema({
  nombre: {
    type: String,
    unique: true,
    required: true,
  },
  puntosVacunacion: {
    type: [PuntosVacunacionSchema],
    ref: "PuntosVacunacionSchema",
  },
});

const Ciudad = model("Ciudad", CiudadSchema, "ciudades");

module.exports = Ciudad;
