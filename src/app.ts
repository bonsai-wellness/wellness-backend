// Librerias
import express from "express";

// Rutas
import authRutas from "./routes/auth.routes";

// Inicializamos app
const app = express();

// Constantes
const PORT = 5001

// Middlewares
app.use(express.json()); // Middleware to parse req.body to a json format 

// Rutas
app.use(authRutas);

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
