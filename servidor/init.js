const express = require("express");
const chalk = require("chalk");

const app = express();

const puerto = process.env.PORT;
const server = app.listen(puerto, () => {
  console.log(
    chalk.greenBright.bold(`Servidor funcionando en el puerto ${puerto}`)
  );
});

server.on("error", (e) => {
  console.log(
    chalk.redBright.bold(
      `El servidor no se a podido levantar por: ${e.message}`
    )
  );
});

module.exports = {
  express,
  app,
};
