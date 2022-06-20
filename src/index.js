const express = require("express");

const app = express();

//Guardar inf
const Direct = require("./models/directorio");

require("./database");

app.use(require("./routes/index.routes"));

app.listen(3000);
console.log("Servidor en puerto", 3000);
