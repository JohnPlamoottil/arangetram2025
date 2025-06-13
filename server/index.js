// server/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

// Middleware
// app.use(cors());
app.use(express.json());

// Routes
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
