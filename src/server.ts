// Importing the express application
const app = require("./app");

// Starting the server
const port: number = 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});
