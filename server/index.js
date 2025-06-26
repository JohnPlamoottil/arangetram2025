// server/index.js
const multer = require("multer");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const { Message, Image } = require("./messages");

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

  const newImage = new Image({
    name: "version2",
    content: req.body.content || "No description",
    image: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
      originalName: req.file.originalname,
    },
  });

  try {
    await newImage.save();
    res.status(201).json({ message: "Image uploaded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to upload image" });
  }
});

// GET all uploaded images
app.get("/api/images", async (req, res) => {
  try {
    const images = await Image.find({}).sort({ _id: -1 });
    // Convert image buffer to base64 so it can be rendered in <img> tags
    const processedImages = images.map((img) => ({
      name: img.name,
      content: img.content,
      contentType: img.image.contentType,
      imageBase64: img.image.data.toString("base64"),
    }));
    res.status(200).json({ images: processedImages });
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ error: "Unable to fetch images" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
