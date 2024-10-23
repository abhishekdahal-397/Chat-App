const express = require("express");
const {
	registerUser,
	loginUser,
	getUser,
	getAllUsers,
	getFriends,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser); //  http://localhost:5000/api/users/register

router.post("/login", loginUser); //   http://localhost:5000/api/users/login
router.get("/user/:id", getUser);
router.get("/allUsers", getAllUsers);
router.get("/friends/:id", getFriends); //  http://localhost:5000/api/users/friends/:id
module.exports = router;
