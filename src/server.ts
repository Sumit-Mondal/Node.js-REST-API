// Importing the application configurations
import config from "config";
import { connect } from "mongoose";
// Importing the express application
const app = require("./app");

// Function for getting the database connection string
function getConnectionString(): string {
	let db_connection_string: string = config.get("db.connection_string");
	const replaceable_part: RegExp = /\<password>/gi;
	return db_connection_string.replace(
		replaceable_part,
		config.get("db.password")
	);
}

// Connecting to database
const dbConnectionString: string = getConnectionString();
connect(dbConnectionString, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Connected to ${config.get("db.name")}.`))
	.catch((err) => console.log(err));

// Starting the server
const port: string | number = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});
