require("./mongo/conexion");
require("./servidor");

const {
  crearRegistroPersona,
  listarPersonas,
} = require("./mongo/controladores/persona");

(async () => {
  /*  await crearRegistroPersona("39401979n", "Jose Maria", "Zamora Perez", "26"); */
  /*  const personas = await listarPersonas();
  console.log(personas); */
})();
