import mongoose from "mongoose";

const amznSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  targetPrice: {
    type: Number,
    required: true,
  },
  channelId: {
    type: String,
    required: true,
  },
});

export default mongoose.model("amzn", amznSchema);
