const express = require("express");
const { getCentrosVacunacion } = require("../../mongo/controladores/ciudad");
const {
  listarPersonasVacunadasCiudad,
} = require("../../mongo/controladores/persona");

const router = express.Router();

// Devuelve un array con las personas que se han vacunado en la ciudad
router.get("/ciudad/:idCiudad", async (req, res, next) => {
  const { idCiudad } = req.params;
  const personasVacunadas = await listarPersonasVacunadasCiudad(idCiudad);
  res.json(personasVacunadas);
});

// Devuelve un array con las personas que se han vacunado en un centro
router.get("/ciudad/:idCentro", (req, res, next) => {});

// Devuelve la informacion de una persona vacunada a partir de un DNI
router.get("/ciudad/:dni", (req, res, next) => {});

// Para crear una persona vacunada
router.post("/persona", (req, res, next) => {});

// Para modificar una persona vacunada
router.put("/persona/:idPersona", (req, res, next) => {});

// Para borrar una persona vacunada
router.delete("/persona/:idPersona", (req, res, next) => {});

module.exports = router;
