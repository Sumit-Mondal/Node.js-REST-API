// Importing the necessary interfaces from the express module
import { Request, Response } from "express";

// Importing the database model
const Tour = require("./../models/tourModel");

// Tour controllers
exports.getTours = async (req: Request, res: Response) => {
	try {
		// Build query
		const queryObj = { ...req.query };

		const excludedFields: string[] = ["page", "sort", "limit", "fields"];
		excludedFields.forEach((el: string) => delete queryObj[el]);

		let queryStr: string = JSON.stringify(queryObj);
		queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (param) => `$${param}`);

		let query = Tour.find(JSON.parse(queryStr));

		if (req.query.sort) {
			const sortBy = req.query.sort.toString().split(",").join(" ");
			query = query.sort(sortBy);
		} else {
			query = query.sort("-createdAt");
		}

		if (req.query.fields) {
			const fields = req.query.fields.toString().split(",").join(" ");
			query = query.select(fields);
		} else {
			query = query.select("-__v");
		}

		let page: number;
		let limit: number;
		if (req.query.page) {
			page = parseInt(req.query.page.toString());
		} else {
			page = 1;
		}

		if (req.query.limit) {
			limit = parseInt(req.query.limit.toString());
		} else {
			limit = 100;
		}

		const skip: number = (page - 1) * limit;

		query = query.skip(skip).limit(limit);

		// Execute query
		const tours = await query;

		if (req.query.page && tours.length === 0) {
			throw new Error(`This page doesn't exist.`);
		}

		// Send the response
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
