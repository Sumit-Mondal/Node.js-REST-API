// Importing the necessary interfaces from the express module
import { Router } from "express";

const tourController = require("./../controllers/tourController");

// Creating the userRouter
const router: Router = Router();

// Routes
router
	.route("/top-5-cheap")
	.get(tourController.aliasTopTours, tourController.getTours);

router.route("/").get(tourController.getTours).post(tourController.createTour);

router
	.route("/:id")
	.get(tourController.getTour)
	.patch(tourController.updateTour)
	.delete(tourController.deleteTour);

// Exporting the router
module.exports = router;
