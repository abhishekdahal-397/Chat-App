const User = require("../models/userModel");

// Create User function
const createUser = async (req, res) => {
	const { username, email, password } = req.body;

	// Basic validation
	if (!username || !email || !password) {
		return res.status(400).json({ message: "All fields are required" });
	}

	try {
		// Check if the user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create new user
		const newUser = new User({ username, email, password: hashedPassword });
		await newUser.save();

		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Registration failed", error: error.message });
	}
};

module.exports = { createUser }; // Export as an object if you have multiple functions
