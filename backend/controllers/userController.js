const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getAllUsers = async (req, res) => {
	const users = await User.find();

	if (!users) {
		return res.status(404).json({ error: "User not found" });
	}
	return res.status(200).json(users);
};
// Create User function
const registerUser = async (req, res) => {
	const { username } = req.body;

	try {
		const user = new User({ username });
		await user.save();

		return res
			.status(201)
			.json({ user, message: "User registered successfully!" });
	} catch (error) {
		return res.status(404).json({ message: `${error}` });
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
	return res.status(200).json({ message: "User authenticated" }); // Successful authentication
};

const getUser = async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id);
	if (!user) {
		return res.status(404).json({ error: "User not found" });
	}
	return res.status(200).json(user);
};

const getFriends = async (req, res) => {
	try {
		const { id } = req.params;

		const result = await User.aggregate([
			// Match the user by the given ID
			{ $match: { _id: mongoose.Types.ObjectId(id) } },

			// Lookup to get connected users from the User collection
			{
				$lookup: {
					from: "users", // The name of the User collection (pluralized 'users')
					localField: "connectedUsers",
					foreignField: "_id",
					as: "friends",
				},
			},

			// Project only the friends' usernames
			{
				$project: {
					_id: 0,
					friends: { username: 1 }, // Extract only the usernames
				},
			},
		]);

		if (!result || result.length === 0) {
			return res.status(404).json({ message: "User not found" });
		}

		const friendsUsernames = result[0].friends.map((friend) => friend.username);

		return res.status(200).json({ friends: friendsUsernames });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
};
module.exports = { registerUser, loginUser, getUser, getAllUsers, getFriends }; // Export as an object if you have multiple functions
