require("./mongo/conexion");
require("./servidor");

const {
  eliminarRegistroPersona,
  modificarPersonaVacunada,
  crearRegistroPersona,
  listarPersonaPorDni,
  anyadirVacunaApersona,
} = require("./mongo/controladores/persona");

(async () => {
  // await crearRegistroPersona({
  //   nombre: "Pepe",
  //   apellidos: "Zamorano Pereza",
  //   centro_vacunacion: { nombre: "Sant Isidor- Centre vacunal CAPSBE" },
  //   dni: "39401854N",
  //   edad: "30",
  // });
  // const personas = await listarPersonaPorDni("39401854N");
  /* const persona = await modificarPersonaVacunada("60e87b8236342a3114375277", {
    nombre: "Jose",
  }); */
  /* const personaEliminada = await eliminarRegistroPersona(
    "60e9d54f4a578a3e78b88bed"
  ); */
  const vacunaAnyadida = await anyadirVacunaApersona(
    "39401854N",
    "11/20/2014 04:11"
  );
  console.log(vacunaAnyadida);
})();
