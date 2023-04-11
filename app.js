// Librerias
const express = require("express");

// Inicializamos app
const app = express();

// Constantes
const PORT = 5001

// Rutas
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
