// routes/authRoutes.js
const express = require("express");
const passport = require("passport");
const router = express.Router();

// @route   GET /auth/github
// @desc    Authenticate with GitHub
router.get("/github", passport.authenticate("github"));

// @route   GET /auth/github/callback
// @desc    GitHub auth callback
router.get("/github/callback", passport.authenticate("github"), (req, res) => {
	// Successful authentication, redirect to your desired location.
	res.redirect("/dashboard"); // Change this to your app's landing page
});

module.exports = router;
