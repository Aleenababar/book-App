const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const conn = require("./conn/conn");
const UserAPI = require("./routes/user");
const TaskAPI = require("./routes/task");
const helmet = require("helmet");

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      styleSrc: ["'self'", "https://fonts.googleapis.com"]
    }
  }
}));

// Connect to database
conn();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/v1", UserAPI);
app.use("/api/v2", TaskAPI);

// Serve React frontend
const frontendBuildPath = path.join(__dirname, "./Frontend/build");
app.use(express.static(frontendBuildPath));

// SPA routing: serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendBuildPath, "index.html"));
});

// Export app for Vercel
module.exports = app;
