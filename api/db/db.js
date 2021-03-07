import mongoose from "mongoose";
import { MONGODB_URI } from "../config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Database Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
