const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors()); // Make sure you call it as a function
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
