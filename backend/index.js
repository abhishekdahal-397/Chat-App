const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const router = express.Router();
// Middleware
app.use(cors()); // Make sure you call it as a function
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/users", userRoutes);

router.get("/", () => {
	res.send("hello");
});
console.log("port is ", process.env.PORT);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
