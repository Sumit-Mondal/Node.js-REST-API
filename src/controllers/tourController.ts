// Importing the necessary interfaces from the express module
import { Request, Response, NextFunction } from "express";

// Tour controllers
exports.checkId = (
	req: Request,
	res: Response,
	next: NextFunction,
	value: string | number
) => {
	console.log(`ID received: ${value}`);
	console.log(`Check if ID is valid or not.`);
	next();
};

exports.checkBody = (req: Request, res: Response, next: NextFunction) => {
	console.log(`Check for required parameters in the request body.`);
	next();
};

exports.getTours = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		results: "length of the tours array",
		data: {
			tours: "tours array",
		},
	});
};

exports.getTour = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		data: {
			tour: "specific tour details",
		},
	});
};

exports.createTour = (req: Request, res: Response) => {
	res.status(201).json({
		status: "success",
		data: {
			tour: "newly created tour details.",
		},
	});
};

exports.updateTour = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		data: {
			tour: "updated tour details",
		},
	});
};

exports.deleteTour = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		data: null,
	});
};
