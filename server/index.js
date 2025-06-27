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

// Image upload route with category support
app.post("/api/upload", upload.single("image"), async (req, res) => {
  console.log("Upload request received");
  console.log("File:", req.file);
  console.log("Body:", req.body);

  if (!req.file) {
    return res.status(400).json({ error: "No image uploaded" });
  }

  const category = req.body.category;
  if (!category) {
    return res.status(400).json({ error: "Category is required" });
  }

  console.log(`Uploading image to category: ${category}`);

  const newImage = new Image({
    name: req.file.originalname || "uploaded-image",
    content: req.body.content || "No description",
    category: category,
    image: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
      originalName: req.file.originalname,
    },
  });

  try {
    await newImage.save();
    console.log("Image saved successfully");
    res.status(201).json({ message: "Image uploaded successfully" });
  } catch (err) {
    console.error("Error saving image:", err);
    res.status(500).json({ error: "Unable to upload image" });
  }
});

// GET all uploaded images with category information - Optimized version
app.get("/api/images", async (req, res) => {
  try {
    console.log("Fetching all images...");
    // Use lean() to get plain JavaScript objects instead of Mongoose documents
    // This reduces memory usage significantly
    const images = await Image.find({})
      .lean()
      .limit(100)
      .select("name content category image.contentType image.data uploadedAt");

    console.log(`Found ${images.length} images in database`);

    // Convert image buffer to base64 so it can be rendered in <img> tags
    const processedImages = images.map((img) => {
      const processedImg = {
        name: img.name,
        content: img.content,
        category: img.category,
        contentType: img.image.contentType,
        imageBase64: img.image.data.toString("base64"),
        uploadedAt: img.uploadedAt,
      };
      console.log(
        `Processed image: ${processedImg.name}, category: ${processedImg.category}`
      );
      return processedImg;
    });

    res.status(200).json({ images: processedImages });
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ error: "Unable to fetch images" });
  }
});

// Optional: GET images by specific category - Optimized version
app.get("/api/images/:category", async (req, res) => {
  try {
    const { category } = req.params;
    console.log(`Fetching images for category: ${category}`);

    const images = await Image.find({ category })
      .lean()
      .limit(50)
      .select("name content category image.contentType image.data uploadedAt");

    const processedImages = images.map((img) => ({
      name: img.name,
      content: img.content,
      category: img.category,
      contentType: img.image.contentType,
      imageBase64: img.image.data.toString("base64"),
      uploadedAt: img.uploadedAt,
    }));

    res.status(200).json({ images: processedImages });
  } catch (err) {
    console.error("Error fetching images by category:", err);
    res.status(500).json({ error: "Unable to fetch images" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
