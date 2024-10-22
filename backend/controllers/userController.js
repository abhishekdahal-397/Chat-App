const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// Create User function
const registerUser = async (req, res) => {
	const { username, password, email, provider } = req.body;

	try {
		// If registering via local method
		if (provider === "local") {
			const hashedPassword = await hashPassword(password); // Hash the password
			const user = new User({ username, password: hashedPassword, provider });
			await user.save();
			return res.status(201).json({ message: "User registered successfully!" });
		}

		// If registering via Google OAuth
		const user = new User({
			email,
			googleId: req.user.id,
			displayName: req.user.displayName,
			provider,
		});
		await user.save();
		return res
			.status(201)
			.json({ message: "User registered via Google successfully!" });
	} catch (error) {
		return res.status(500).json({ error: "Error registering user." });
	}
};
const loginUser = async (req, res) => {
	console.log("Enter Username");
	const { username } = req.body; // Extract username from the request body

	// Check if username is provided
	if (!username) {
		return res.status(400).json({ error: "Username is required" }); // Handle missing username
	}

	// Find user in the database
	const user = await User.findOne({ username });

	// Check if the user exists
	if (!user) {
		return res.status(401).json({ error: "Invalid username" }); // Respond with 401 for invalid user
	}

	// If the user is found, authenticate the user
	console.log("User authenticated");
	return res.status(200).json({ message: "User authenticated" }); // Successful authentication
};

module.exports = { registerUser, loginUser }; // Export as an object if you have multiple functions
