// FILE: messages.js
// this is our schema file for all things, not just messages

const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  dancerName: { type: String, required: false },
  name: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: false, // optional message or description
  },
  // Cloudinary fields (replacing the large binary data storage)
  cloudinaryUrl: {
    type: String,
    required: true, // URL to access the image on Cloudinary
  },
  cloudinaryPublicId: {
    type: String,
    required: true, // Cloudinary's public ID for the image (needed for deletion)
  },
  // Keep some metadata for reference
  contentType: {
    type: String,
    required: true, // e.g., 'image/jpeg'
  },
  originalName: {
    type: String,
    required: false, // e.g., 'photo.jpg'
  },
  category: {
    type: String,
    required: true, // e.g., 'lobby', 'auditorium', etc.
    trim: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const videoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: false, // optional message or description
  },
  // Cloudinary fields (replacing the large binary data storage)
  cloudinaryUrl: {
    type: String,
    required: true, // URL to access the video on Cloudinary
  },
  cloudinaryPublicId: {
    type: String,
    required: true, // Cloudinary's public ID for the video (needed for deletion)
  },
  // Keep some metadata for reference
  contentType: {
    type: String,
    required: true, // e.g., 'video/mp4'
  },
  originalName: {
    type: String,
    required: false, // e.g., 'video.mp4'
  },
  category: {
    type: String,
    required: true, // e.g., 'speeches', 'pushpanjali', etc.
    trim: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);
const Image = mongoose.model("Image", imageSchema);
const Video = mongoose.model("Video", videoSchema);

module.exports = { Message, Image, Video };
