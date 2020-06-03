// Importing the necessary interfaces from the express module.
import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

// Routes
app.get("/", (req: Request, res: Response) => {
	res
		.status(200)
		.json({ message: "Hello from the server side!", app: "Node-TypeScript" });
});

// Starting the server
const port: number = 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});
