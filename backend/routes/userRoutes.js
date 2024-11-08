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
router.get("/user/:id", getUser); //  http://localhost:5000/api/users/user/:id
router.get("/allUsers", getAllUsers); // http://localhost:5000/api/users/allUsers
router.get("/friends/:id", getFriends); //  http://localhost:5000/api/users/friends/:id
module.exports = router;
