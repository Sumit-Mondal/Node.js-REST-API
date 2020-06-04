// Importing the necessary interfaces from the express module.
import express, { Application, Request, Response, NextFunction } from "express";
// Importing the necessary functions from the body-parser module.
import bodyParser from "body-parser";
// Importing the necessary modules for creating a logger.
import path from "path";
import morgan from "morgan";
import rfs, { RotatingFileStream, createStream } from "rotating-file-stream";

// Creating an express application
const app: Application = express();

// Creating a rotating write system
const accessLogStream: RotatingFileStream = createStream("access.log", {
	interval: "1d",
	path: path.join(__dirname, "../log"),
});

// Middleware functions
app.use(
	morgan("combined", { stream: accessLogStream })
); /* Setting up the logger */
app.use(bodyParser.json()); /* parsing application/json */
app.use(
	bodyParser.urlencoded({ extended: false })
); /* parsing application/x-www-form-urlencoded */

// Route handlers
const baseRoute = (req: Request, res: Response) => {
	res
		.status(200)
		.json({ message: "Hello from the server side!", app: "Node-TypeScript" });
};

const getTours = (req: Request, res: Response) => {
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

const getUsers = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		results: "length of the users array",
		data: {
			users: "users array",
		},
	});
};

const getUser = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		data: {
			user: "specific user details",
		},
	});
};

const createUser = (req: Request, res: Response) => {
	res.status(201).json({
		status: "success",
		data: {
			user: "newly created user details.",
		},
	});
};

const updateUser = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		data: {
			user: "updated user details",
		},
	});
};

const deleteUser = (req: Request, res: Response) => {
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

app.route("/api/v1/tours").get(getTours).post(createTour);

app
	.route("/api/v1/tours/:id")
	.get(getTour)
	.patch(updateTour)
	.delete(deleteTour);

app.route("/api/v1/users").get(getUsers).post(createUser);

app
	.route("/api/v1/users/:id")
	.get(getUser)
	.patch(updateUser)
	.delete(deleteUser);

// Starting the server
const port: number = 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});
