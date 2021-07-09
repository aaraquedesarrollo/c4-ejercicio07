const morganFreeman = require("morgan");
const { app, express } = require("./init");

app.use(morganFreeman);
app.use(express.json());
