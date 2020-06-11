// Importing the necessary classes & functions from the mongoose library
import { Schema, model } from "mongoose";

// Defining the tour schema
const tourSchema: Schema = new Schema({
	name: {
		type: String,
		required: [true, "A tour must have a name"],
		unique: true,
		trim: true,
	},
	duration: {
		type: Number,
		required: [true, "A tour must have a duration"],
	},
	maxGroupSize: {
		type: Number,
		required: [true, "A tour must have a group size"],
	},
	difficulty: {
		type: String,
		required: [true, "A tour must have a difficulty"],
	},
	ratingsAverage: {
		type: Number,
		default: 0,
	},
	ratingsQuantity: {
		type: Number,
		default: 0,
	},
	price: {
		type: Number,
		required: [true, "A tour must have a price"],
	},
	priceDiscount: {
		type: Number,
	},
	summary: {
		type: String,
		required: [true, "A tour must have a summary"],
		trim: true,
	},
	description: {
		type: String,
		trim: true,
	},
	imageCover: {
		type: String,
		required: [true, "A tour must have a cover image"],
	},
	images: {
		type: [String],
	},
	createdAt: {
		type: Date,
		default: Date.now(),
		select: false,
	},
	startDates: {
		type: [Date],
	},
});

// Exporting the Tour model
module.exports = model("Tour", tourSchema);
