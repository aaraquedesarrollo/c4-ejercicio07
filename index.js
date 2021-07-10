require("./mongo/conexion");
require("./servidor");

const {
  eliminarRegistroPersona,
  modificarPersonaVacunada,
  crearRegistroPersona,
  listarPersonaPorDni,
} = require("./mongo/controladores/persona");

(async () => {
  /* await crearRegistroPersona({
      nombre: "Pepe",
      apellidos:"Zamorano Pereza",
      dni: "39401979N",
      edad:"30",
    }); */
  // const personas = await listarPersonaPorDni("39401979n");
  /* const persona = await modificarPersonaVacunada("60e87b8236342a3114375277", {
    nombre: "Jose",
  }); */
  /* const personaEliminada = await eliminarRegistroPersona(
    "60e9d54f4a578a3e78b88bed"
  ); */
  // console.log(personaEliminada);
})();
