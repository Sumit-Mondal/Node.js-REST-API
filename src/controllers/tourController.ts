// Importing the necessary interfaces from the express module
import { Request, Response } from "express";

// Tour controllers
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
