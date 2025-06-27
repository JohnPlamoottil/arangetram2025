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
  image: {
    data: Buffer, // raw binary data from multer.memoryStorage()
    contentType: {
      type: String,
      required: true, // e.g., 'image/jpeg'
    },
    originalName: {
      type: String,
      required: false, // e.g., 'photo.jpg'
    },
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

const Message = mongoose.model("Message", messageSchema);
const Image = mongoose.model("Image", imageSchema);

module.exports = { Message, Image };
