// Importing the necessary interfaces from the express module
import { Request, Response } from "express";

// Importing the database model
const Tour = require("./../models/tourModel");

// Tour controllers
exports.getTours = async (req: Request, res: Response) => {
	try {
		const tours = await Tour.find();
		res.status(200).json({
			status: "success",
			results: tours.length,
			data: {
				tours,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err,
		});
	}
};

exports.getTour = async (req: Request, res: Response) => {
	try {
		const tour = await Tour.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: {
				tour,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err,
		});
	}
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

exports.updateTour = async (req: Request, res: Response) => {
	try {
		const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				tour,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err,
		});
	}
};

exports.deleteTour = async (req: Request, res: Response) => {
	try {
		await Tour.findByIdAndDelete(req.params.id);
		res.status(204).json({
			status: "success",
			data: null,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err,
		});
	}
};
