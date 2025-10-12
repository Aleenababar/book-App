const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Serve frontend build
const frontendPath = path.join(__dirname, "Frontend", "build");
app.use(express.static(frontendPath));

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is running fine!" });
});

// ✅ For all other routes, serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
