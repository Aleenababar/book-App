const express = require("express");
const app = express();
require ("dotenv").config();
const conn = require("./conn/conn");
const cors =require("cors");
const UserAPI = require("./routes/user");
const TaskAPI =require("./routes/task");
const path = require("path");

// Serve frontend build (React)
app.use(express.static(path.join(__dirname, "../frontend/build")));

// For SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/build", "index.html"));
});

app.use (cors());
app.use(express.json());
conn();
app.use("/api/v1", UserAPI);
// localhost:1000/api/v1/sign-in 
app.use("/api/v2", TaskAPI);

const PORT =1000;
app.listen(PORT,()=>(console.log("server started")));