
const express = require("express");

const app = express();

app.use(express.json());

// Import Routes
const healthRoutes = require("./routes/health.routes");

// Routes
app.use("/api/health", healthRoutes);

module.exports = app;