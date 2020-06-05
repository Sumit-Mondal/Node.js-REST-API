// Importing the necessary interfaces from the express module
import { Request, Response, NextFunction } from "express";

// Users controllers
exports.checkId = (
	req: Request,
	res: Response,
	next: NextFunction,
	value: string | number
) => {
	console.log(`ID received: ${value}`);
	next();
};

exports.getUsers = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		results: "length of the users array",
		data: {
			users: "users array",
		},
	});
};

exports.getUser = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		data: {
			user: "specific user details",
		},
	});
};

exports.createUser = (req: Request, res: Response) => {
	res.status(201).json({
		status: "success",
		data: {
			user: "newly created user details.",
		},
	});
};

exports.updateUser = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		data: {
			user: "updated user details",
		},
	});
};

exports.deleteUser = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		data: null,
	});
};
