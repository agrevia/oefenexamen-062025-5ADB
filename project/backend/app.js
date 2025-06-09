const express = require("express");
const cors = require("cors");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const db = require("./services/db");
const app = express();

// Swagger-documentatie
const swaggerDocument = JSON.parse(fs.readFileSync("./services/swagger.json"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());

/* -------------------------------------
   ROUTES VOOR BOEKEN
--------------------------------------*/

// GET alle boeken


// GET één boek op ID


// POST boek toevoegen


// PUT boek aanpassen


// DELETE boek


// Start de server
app.listen(3333, () => {
  console.log("Bibliotheek API draait op http://localhost:3333");
});
