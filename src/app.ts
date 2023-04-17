// Librerias
import express from "express";

// Inicializamos app
const app = express();

// Constantes
const PORT = 5001

// Middlewares
app.use(express.json()); // Middleware to parse req.body to a json format 

// Rutas
app.get("/", (_req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
