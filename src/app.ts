// Importing the necessary interfaces from the express module.
import express, { Application, Request, Response, NextFunction } from "express";
// Importing the necessary functions from the body-parser module.
import bodyParser from "body-parser";

// Creating an express application
const app: Application = express();

// Middleware functions
app.use(bodyParser.json()); /* parse application/json */
app.use(
	bodyParser.urlencoded({ extended: false })
); /* parse application/x-www-form-urlencoded */

// Route handlers
const baseRoute = (req: Request, res: Response) => {
	res
		.status(200)
		.json({ message: "Hello from the server side!", app: "Node-TypeScript" });
};

const getAllTours = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		results: "length of the tours array",
		data: {
			tours: "tours array",
		},
	});
};

const getTour = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		data: {
			tour: "specific tour details",
		},
	});
};

const createTour = (req: Request, res: Response) => {
	res.status(201).json({
		status: "success",
		data: {
			tour: "newly created tour details.",
		},
	});
};

const updateTour = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		data: {
			tour: "updated tour details",
		},
	});
};

const deleteTour = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		data: null,
	});
};

// Routes
/*
app.get("/api/v1/tours", getAllTours);
app.get("/api/v1/tours/:id", getTour);
app.post("/api/v1/tours", createTour);
app.patch("/api/v1/tours/:id", updateTour);
app.delete("/api/v1/tours/:id", deleteTour);
*/
app.get("/", baseRoute);
app.route("/api/v1/tours").get(getAllTours).post(createTour);
app
	.route("/api/v1/tours/:id")
	.get(getTour)
	.patch(updateTour)
	.delete(deleteTour);

// Starting the server
const port: number = 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});
