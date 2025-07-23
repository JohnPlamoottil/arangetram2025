// index.js
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
const { Message, Image, Video } = require("./messages");

const app = express();
const PORT = 8080;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((err) => console.error("Connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Multer setup for file upload with size limits
const storage = multer.memoryStorage();

// Different upload configs for images vs videos
const uploadImage = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit for images
  },
});

const uploadVideo = multer({
  storage: storage,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit for videos (Cloudinary free tier limit)
  },
});

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

// Single image upload route (keeping existing functionality)
app.post("/api/upload", uploadImage.single("image"), async (req, res) => {
  console.log("Single image upload request received");
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
    // Compress image to optimize for Cloudinary upload with EXIF orientation handling
    let quality = 80;
    let compressedBuffer;

    // Try progressively lower qualities until under 2MB
    for (let i = 0; i < 5; i++) {
      compressedBuffer = await sharp(req.file.buffer)
        .rotate() // This automatically rotates the image based on EXIF orientation data
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
            // Ensure Cloudinary doesn't try to auto-rotate again
            flags: "keep_attribution",
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

// Multiple images upload route
app.post(
  "/api/upload-multiple",
  uploadImage.array("images", 20),
  async (req, res) => {
    console.log("Multiple images upload request received");
    console.log("Files count:", req.files?.length || 0);
    console.log("Body:", req.body);

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No images uploaded" });
    }

    const category = req.body.category;
    if (!category) {
      return res.status(400).json({ error: "Category is required" });
    }

    const results = [];
    const errors = [];

    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i];

      try {
        console.log(
          `Processing image ${i + 1}/${req.files.length}: ${file.originalname}`
        );

        // Compress image to optimize for Cloudinary upload with EXIF orientation handling
        let quality = 80;
        let compressedBuffer;

        // Try progressively lower qualities until under 2MB
        for (let j = 0; j < 5; j++) {
          compressedBuffer = await sharp(file.buffer)
            .rotate() // This automatically rotates the image based on EXIF orientation data
            .resize({ width: 1200 }) // resize to reduce pixels if needed
            .jpeg({ quality })
            .toBuffer();

          if (compressedBuffer.length <= 2 * 1024 * 1024) break; // under 2MB
          quality -= 10; // reduce quality and try again
        }

        // Upload to Cloudinary
        const uploadResult = await new Promise((resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                resource_type: "image",
                folder: `dance-gallery/${category}`,
                public_id: `${category}_${Date.now()}_${i}`, // unique filename with index
                quality: "auto:good",
                fetch_format: "auto",
                flags: "keep_attribution",
              },
              (error, result) => {
                if (error) {
                  console.error(
                    `Cloudinary upload error for ${file.originalname}:`,
                    error
                  );
                  reject(error);
                } else {
                  console.log(
                    `Cloudinary upload success for ${file.originalname}:`,
                    result.secure_url
                  );
                  resolve(result);
                }
              }
            )
            .end(compressedBuffer);
        });

        // Save image metadata to MongoDB
        const newImage = new Image({
          name: file.originalname || "uploaded-image",
          content: req.body.content || "No description",
          category: category,
          cloudinaryUrl: uploadResult.secure_url,
          cloudinaryPublicId: uploadResult.public_id,
          contentType: file.mimetype,
          originalName: file.originalname,
        });

        await newImage.save();
        console.log(`Image metadata saved for ${file.originalname}`);

        results.push({
          originalName: file.originalname,
          imageUrl: uploadResult.secure_url,
          success: true,
        });
      } catch (err) {
        console.error(`Error uploading ${file.originalname}:`, err);
        errors.push({
          originalName: file.originalname,
          error: err.message || "Upload failed",
          success: false,
        });
      }
    }

    res.status(201).json({
      message: `Processed ${req.files.length} images`,
      successful: results.length,
      failed: errors.length,
      results: results,
      errors: errors,
    });
  }
);

// Single video upload route (keeping existing functionality)
app.post("/api/upload-video", uploadVideo.single("video"), async (req, res) => {
  console.log("Single video upload request received");

  if (!req.file) {
    return res.status(400).json({ error: "No video uploaded" });
  }

  const category = req.body.category;
  if (!category) {
    return res.status(400).json({ error: "Category is required" });
  }

  // Check file size (100MB = 104,857,600 bytes)
  const maxSize = 100 * 1024 * 1024; // 100MB
  if (req.file.size > maxSize) {
    console.log(
      `Video file too large: ${req.file.size} bytes (${(
        req.file.size /
        1024 /
        1024
      ).toFixed(2)}MB)`
    );
    return res.status(413).json({
      error: `Video file is too large. Maximum size is 100MB, but your file is ${(
        req.file.size /
        1024 /
        1024
      ).toFixed(2)}MB. Please compress the video before uploading.`,
    });
  }

  console.log(`File size: ${(req.file.size / 1024 / 1024).toFixed(2)}MB`);
  console.log("File:", {
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
  });
  console.log("Body:", req.body);

  try {
    console.log(`Uploading video to Cloudinary for category: ${category}`);

    // Upload to Cloudinary with additional options for video optimization
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "video",
            folder: `dance-gallery-videos/${category}`, // organize by category in Cloudinary
            public_id: `${category}_${Date.now()}`, // unique filename
            quality: "auto:good", // Cloudinary's automatic quality optimization
            // Add video-specific optimizations
            transformation: [
              { quality: "auto:good" },
              { fetch_format: "auto" },
            ],
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary video upload error:", error);
              reject(error);
            } else {
              console.log(
                "Cloudinary video upload success:",
                result.secure_url
              );
              resolve(result);
            }
          }
        )
        .end(req.file.buffer);
    });

    // Save video metadata to MongoDB (with Cloudinary URL instead of binary data)
    const newVideo = new Video({
      name: req.file.originalname || "uploaded-video",
      content: req.body.content || "No description",
      category: category,
      cloudinaryUrl: uploadResult.secure_url,
      cloudinaryPublicId: uploadResult.public_id,
      contentType: req.file.mimetype,
      originalName: req.file.originalname,
    });

    await newVideo.save();
    console.log("Video metadata saved successfully to MongoDB");
    res.status(201).json({
      message: "Video uploaded successfully",
      videoUrl: uploadResult.secure_url,
    });
  } catch (err) {
    console.error("Error uploading video:", err);

    // Provide more specific error messages
    if (err.http_code === 413) {
      res.status(413).json({
        error:
          "Video file is too large for Cloudinary. Please compress the video to under 100MB and try again.",
      });
    } else if (err.message && err.message.includes("timeout")) {
      res.status(408).json({
        error:
          "Video upload timed out. Please try with a smaller file or check your internet connection.",
      });
    } else {
      res.status(500).json({
        error:
          "Unable to upload video. Please try again or contact support if the problem persists.",
      });
    }
  }
});

// Multiple videos upload route
app.post(
  "/api/upload-multiple-videos",
  uploadVideo.array("videos", 10),
  async (req, res) => {
    console.log("Multiple videos upload request received");
    console.log("Files count:", req.files?.length || 0);
    console.log("Body:", req.body);

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No videos uploaded" });
    }

    const category = req.body.category;
    if (!category) {
      return res.status(400).json({ error: "Category is required" });
    }

    const results = [];
    const errors = [];
    const maxSize = 100 * 1024 * 1024; // 100MB

    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i];

      try {
        console.log(
          `Processing video ${i + 1}/${req.files.length}: ${file.originalname}`
        );

        // Check file size

        if (file.size > maxSize) {
          throw new Error(
            `File too large: ${(file.size / 1024 / 1024).toFixed(
              2
            )}MB (max 100MB)`
          );
        }

        // Upload to Cloudinary
        const uploadResult = await new Promise((resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                resource_type: "video",
                folder: `dance-gallery-videos/${category}`,
                public_id: `${category}_${Date.now()}_${i}`, // unique filename with index
                quality: "auto:good",
                transformation: [
                  { quality: "auto:good" },
                  { fetch_format: "auto" },
                ],
                timeout: 180000,
              },
              (error, result) => {
                if (error) {
                  console.error(
                    `Cloudinary upload error for ${file.originalname}:`,
                    error
                  );
                  reject(error);
                } else {
                  console.log(
                    `Cloudinary upload success for ${file.originalname}:`,
                    result.secure_url
                  );
                  resolve(result);
                }
              }
            )
            .end(file.buffer);
        });

        // Save video metadata to MongoDB
        const newVideo = new Video({
          name: file.originalname || "uploaded-video",
          content: req.body.content || "No description",
          category: category,
          cloudinaryUrl: uploadResult.secure_url,
          cloudinaryPublicId: uploadResult.public_id,
          contentType: file.mimetype,
          originalName: file.originalname,
        });

        await newVideo.save();
        console.log(`Video metadata saved for ${file.originalname}`);

        results.push({
          originalName: file.originalname,
          videoUrl: uploadResult.secure_url,
          success: true,
        });
      } catch (err) {
        console.error(`Error uploading ${file.originalname}:`, err);
        errors.push({
          originalName: file.originalname,
          error: err.message || "Upload failed",
          success: false,
        });
      }
    }

    res.status(201).json({
      message: `Processed ${req.files.length} videos`,
      successful: results.length,
      failed: errors.length,
      results: results,
      errors: errors,
    });
  }
);

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
        // _id: img._id, // functionality to enable delete image from gallery
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

// GET all uploaded videos - Now fetching Cloudinary URLs
app.get("/api/videos", async (req, res) => {
  try {
    console.log("Fetching all videos...");

    const videos = await Video.find({})
      .lean()
      .limit(100)
      .select(
        "name content category cloudinaryUrl contentType originalName uploadedAt"
      );

    console.log(`Found ${videos.length} videos in database`);

    // Transform the data to match frontend expectations
    const processedVideos = videos.map((video) => {
      const processedVideo = {
        name: video.name,
        content: video.content,
        category: video.category,
        contentType: video.contentType,
        videoUrl: video.cloudinaryUrl, // Cloudinary URL instead of base64
        uploadedAt: video.uploadedAt,
        _id: video._id,
      };
      console.log(
        `Processed video: ${processedVideo.name}, category: ${processedVideo.category}`
      );
      return processedVideo;
    });

    res.status(200).json({ videos: processedVideos });
  } catch (err) {
    console.error("Error fetching videos:", err);
    res.status(500).json({ error: "Unable to fetch videos" });
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

// GET videos by specific category
app.get("/api/videos/:category", async (req, res) => {
  try {
    const { category } = req.params;
    console.log(`Fetching videos for category: ${category}`);

    const videos = await Video.find({ category })
      .lean()
      .limit(50)
      .select(
        "name content category cloudinaryUrl contentType originalName uploadedAt"
      );

    const processedVideos = videos.map((video) => ({
      name: video.name,
      content: video.content,
      category: video.category,
      contentType: video.contentType,
      videoUrl: video.cloudinaryUrl,
      uploadedAt: video.uploadedAt,
      _id: video._id,
    }));

    res.status(200).json({ videos: processedVideos });
  } catch (err) {
    console.error("Error fetching videos by category:", err);
    res.status(500).json({ error: "Unable to fetch videos" });
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

// Delete video - Now also removes from Cloudinary
app.delete("/api/videos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    // Delete from Cloudinary if public_id exists
    if (video.cloudinaryPublicId) {
      try {
        await cloudinary.uploader.destroy(video.cloudinaryPublicId, {
          resource_type: "video",
        });
        console.log(
          `Deleted video from Cloudinary: ${video.cloudinaryPublicId}`
        );
      } catch (cloudinaryError) {
        console.error("Error deleting from Cloudinary:", cloudinaryError);
        // Continue with MongoDB deletion even if Cloudinary deletion fails
      }
    }

    // Delete from MongoDB
    await Video.findByIdAndDelete(id);
    console.log(`Deleted video from MongoDB: ${id}`);

    res.status(200).json({ message: "Video deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Unable to delete video" });
  }
});

// Error handling middleware for multer file size errors
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(413).json({
        error:
          "File too large. Images must be under 10MB and videos must be under 100MB.",
      });
    }
  }
  next(error);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
