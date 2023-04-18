// Librerias
import express from "express";

// Router
const router = express.Router();

// Rutas
router.get("/", (_req, res) => {
	res.send("Hello World!");
});

router.get("/signup", (_req, res) => {
    res.send("Signup");
});

// Exportamos modulo
export default router;