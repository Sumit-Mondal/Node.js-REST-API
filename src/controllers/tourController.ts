// Importing the necessary interfaces from the express module
import { Request, Response } from "express";

// Importing the database model
const Tour = require("./../models/tourModel");

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

exports.createTour = async (req: Request, res: Response) => {
	try {
		const newTour = await Tour.create(req.body);
		res.status(201).json({
			status: "success",
			data: {
				tour: newTour,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err,
		});
	}
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
