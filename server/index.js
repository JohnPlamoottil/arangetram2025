// FILE: index.js
// Cloudinary credentials are now loaded from environment variables

const multer = require("multer");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sharp = require("sharp");
dotenv.config();
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
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

// Configure Cloudinary with env variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

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

// Image upload route with Cloudinary integration
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

  try {
    // Compress image to optimize for Cloudinary upload
    let quality = 80;
    let compressedBuffer;

    // Try progressively lower qualities until under 2MB
    for (let i = 0; i < 5; i++) {
      compressedBuffer = await sharp(req.file.buffer)
        .resize({ width: 1200 }) // resize to reduce pixels if needed
        .jpeg({ quality })
        .toBuffer();

      if (compressedBuffer.length <= 2 * 1024 * 1024) break; // under 2MB
      quality -= 10; // reduce quality and try again
    }

    console.log(`Uploading image to Cloudinary for category: ${category}`);

    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "image",
            folder: `dance-gallery/${category}`, // organize by category in Cloudinary
            public_id: `${category}_${Date.now()}`, // unique filename
            quality: "auto:good", // Cloudinary's automatic quality optimization
            fetch_format: "auto", // Cloudinary's automatic format optimization
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              reject(error);
            } else {
              console.log("Cloudinary upload success:", result.secure_url);
              resolve(result);
            }
          }
        )
        .end(compressedBuffer);
    });

    // Save image metadata to MongoDB (with Cloudinary URL instead of binary data)
    const newImage = new Image({
      name: req.file.originalname || "uploaded-image",
      content: req.body.content || "No description",
      category: category,
      cloudinaryUrl: uploadResult.secure_url,
      cloudinaryPublicId: uploadResult.public_id,
      contentType: req.file.mimetype,
      originalName: req.file.originalname,
    });

    await newImage.save();
    console.log("Image metadata saved successfully to MongoDB");
    res.status(201).json({
      message: "Image uploaded successfully",
      imageUrl: uploadResult.secure_url,
    });
  } catch (err) {
    console.error("Error uploading image:", err);
    res.status(500).json({ error: "Unable to upload image" });
  }
});

// GET all uploaded images - Now fetching Cloudinary URLs
app.get("/api/images", async (req, res) => {
  try {
    console.log("Fetching all images...");

    const images = await Image.find({})
      .lean()
      .limit(100)
      .select(
        "name content category cloudinaryUrl contentType originalName uploadedAt"
      );

    console.log(`Found ${images.length} images in database`);

    // Transform the data to match frontend expectations
    const processedImages = images.map((img) => {
      const processedImg = {
        name: img.name,
        content: img.content,
        category: img.category,
        contentType: img.contentType,
        imageUrl: img.cloudinaryUrl, // Cloudinary URL instead of base64
        uploadedAt: img.uploadedAt,
        _id: img._id,
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

// GET images by specific category
app.get("/api/images/:category", async (req, res) => {
  try {
    const { category } = req.params;
    console.log(`Fetching images for category: ${category}`);

    const images = await Image.find({ category })
      .lean()
      .limit(50)
      .select(
        "name content category cloudinaryUrl contentType originalName uploadedAt"
      );

    const processedImages = images.map((img) => ({
      name: img.name,
      content: img.content,
      category: img.category,
      contentType: img.contentType,
      imageUrl: img.cloudinaryUrl,
      uploadedAt: img.uploadedAt,
      _id: img._id,
    }));

    res.status(200).json({ images: processedImages });
  } catch (err) {
    console.error("Error fetching images by category:", err);
    res.status(500).json({ error: "Unable to fetch images" });
  }
});

// Delete image - Now also removes from Cloudinary
app.delete("/api/images/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    // Delete from Cloudinary if public_id exists
    if (image.cloudinaryPublicId) {
      try {
        await cloudinary.uploader.destroy(image.cloudinaryPublicId);
        console.log(
          `Deleted image from Cloudinary: ${image.cloudinaryPublicId}`
        );
      } catch (cloudinaryError) {
        console.error("Error deleting from Cloudinary:", cloudinaryError);
        // Continue with MongoDB deletion even if Cloudinary deletion fails
      }
    }

    // Delete from MongoDB
    await Image.findByIdAndDelete(id);
    console.log(`Deleted image from MongoDB: ${id}`);

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Unable to delete image" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
