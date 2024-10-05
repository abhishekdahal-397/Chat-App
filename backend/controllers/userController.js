const User = require("../models/userModel");

// Create User function
const createUser = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		// Create a new user instance
		const user = new User({
			username, // Assuming your User model has a field named 'username'
			email,
			password,
		});

		// Save the user to the database
		const savedUser = await user.save();
		res.status(201).json(savedUser); // Use 201 for successful creation
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server error", error });
	}
};

module.exports = { createUser }; // Export as an object if you have multiple functions
