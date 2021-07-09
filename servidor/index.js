const morganFreeman = require("morgan");
const { app, express } = require("./init");
const { errorGeneral, error404 } = require("./errores");

app.use(morganFreeman);
app.use(express.json());

app.use(error404);
app.use((error, res, req, next) => errorGeneral);
