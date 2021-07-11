require("dotenv").config();
const mongoose = require("mongoose");
const debug = require("debug")("vacunas:mongo:conexion");

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      debug("No se ha podido conectar a la base de datos");
      debug(err.message);
      return;
    }
    debug("Se ha conectado a la base de datos");
  }
);
