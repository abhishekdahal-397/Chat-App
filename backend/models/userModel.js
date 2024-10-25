const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
	connectedUsers: [
		{
			type: mongoose.Types.ObjectId,
			ref: "User", // Reference to the User model
		},
	],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
