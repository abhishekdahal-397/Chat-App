const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser); //  http://localhost:5000/api/users/register

router.post("/login", loginUser); //   http://localhost:5000/api/users/login

module.exports = router;
