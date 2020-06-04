// Importing the necessary interfaces from the express module.
import express, { Application, Router } from "express";
// Importing the body-parser module.
import bodyParser from "body-parser";
// Importing the necessary modules for creating a logger.
import path from "path";
import morgan from "morgan";
import { RotatingFileStream, createStream } from "rotating-file-stream";

// Importing the routers
const tourRouter: Router = require("./routes/tourRoutes");
const userRouter: Router = require("./routes/userRoutes");

// Creating an express application
const app: Application = express();

// Creating a rotating write system
const accessLogStream: RotatingFileStream = createStream("access.log", {
	interval: "1d",
	path: path.join(__dirname, "../log"),
});

// Middleware functions
/* Setting up the logger */
app.use(morgan("combined", { stream: accessLogStream }));
/* parsing application/json */
app.use(bodyParser.json());
/* parsing application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

// Exporting the application
module.exports = app;
