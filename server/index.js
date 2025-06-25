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

// Multer setup for image upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Routes
app.get("/api/message", async (req, res) => {
  const messages = await Message.find({}).sort({ createdAt: "desc" });
  res.status(200).json({ messages });
});

app.post("/api/message", async (req, res) => {
  const { dancerName, name, content } = req.body;
  if (!name || !content) {
    return res.status(400).json({ error: "Name and message are required" });
  }

  const newMessage = new Message({ dancerName, name, content });

  try {
    await newMessage.save();
    res.status(201).json({ message: newMessage });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Unable to save message" });
  }
});

// Image upload route
app.post("/api/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No image uploaded" });
  }

  const newMessage = new Message({
    name: req.body.name || "Unknown",
    content: req.body.content || "Image upload",
    image: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
  });

  try {
    await newMessage.save();
    res.status(201).json({ message: "Image uploaded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to upload image" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
