// server/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const Message = require("./messages");

const app = express();
const PORT = 8080;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((err) => console.error("Connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/message", async (req, res) => {
  const messages = await Message.find({}).sort({ createdAt: "desc" });

  res.status(200).json({ messages });
});

app.post("/api/message", async (req, res) => {
  const { name, content } = req.body;
  if (!name || !content) {
    return res.status(400).json({ error: "Name and message are required" });
  }

  const newMessage = new Message({ name, content });

  try {
    await newMessage.save();

    res.status(201).json({ message: newMessage });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Unable to save message" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
