// Importing necessary interfaces from the express module
import { Router } from "express";

const userController = require("./../controllers/userController");

// Creating the tourRouter
const router: Router = Router();

// Routes
router.route("/").get(userController.getUsers).post(userController.createUser);

router
	.route("/:id")
	.get(userController.getUser)
	.patch(userController.updateUser)
	.delete(userController.deleteUser);

// Exporting the router
module.exports = router;
