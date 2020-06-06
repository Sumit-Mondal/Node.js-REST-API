// Importing the necessary classes & functions from the mongoose library
import { Schema, model } from "mongoose";

// Defining the tour schema
const tourSchema: Schema = new Schema({
	name: {
		type: String,
		required: [true, "A tour must have a name"],
		unique: true,
	},
	rating: {
		type: Number,
		default: 0,
	},
	price: {
		type: Number,
		required: [true, "A tour must have a price"],
	},
});

// Exporting the Tour model
module.exports = model("Tour", tourSchema);
