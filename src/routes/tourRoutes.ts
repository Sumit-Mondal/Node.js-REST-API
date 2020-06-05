// Importing the necessary interfaces from the express module
import { Router } from "express";

const tourController = require("./../controllers/tourController");

// Creating the userRouter
const router: Router = Router();

// Param middleware
router.param("id", tourController.checkId);

// Routes
router.route("/").get(tourController.getTours).post(tourController.createTour);

router
	.route("/:id")
	.get(tourController.getTour)
	.patch(tourController.updateTour)
	.delete(tourController.deleteTour);

// Exporting the router
module.exports = router;
