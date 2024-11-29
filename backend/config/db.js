const mongoose = require("mongoose");
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB Connected: ${process.env.MONGODB_URI}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // Exit with failure
	}
};

module.exports = connectDB;
