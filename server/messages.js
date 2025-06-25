const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  dancerName: { type: String, required: false },
  name: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const imageSchema = new mongoose.Schema({
  name: String,
  content: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Message = mongoose.model("Message", messageSchema);
const Image = mongoose.model("Image", imageSchema);

module.exports = { Message, Image };
