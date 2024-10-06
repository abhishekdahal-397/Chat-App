const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
require("./passport-setup"); // Import passport configuration
const app = express();
const router = express.Router();
// Middleware
app.use(cors()); // Make sure you call it as a function
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
connectDB();

// Middleware
app.use(
	session({ secret: "your_secret_key", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/users", userRoutes);
app.use("/auth", authRoutes);
router.get("/", () => {
	res.send("hello");
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
