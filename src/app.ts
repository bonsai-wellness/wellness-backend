// Libraries
import express from "express";
import cors from "cors";

// Route imports
import authRouter from "./routes/auth.routes";

// Inicializamos app
const app = express();

if (!process.env.PORT) {
	console.log('Specify PORT on .env file');
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

// Middlewares
app.use(express.json()); // Middleware to parse req.body to a json format 

// Config
app.use(cors());
app.use(express.json());

// Routes
app.use(authRouter);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
