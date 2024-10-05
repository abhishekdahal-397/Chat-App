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

module.exports = { registerUser }; // Export as an object if you have multiple functions
