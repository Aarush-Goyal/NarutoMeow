import express from "express";
import { connectDB } from "./db/db.js";

// importing routes
import indexRoutes from "./routes/index.js";

const app = express();

connectDB();

const PORT = 8000; // PORT

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// using routes
app.use("/api/v1/", indexRoutes);

app.listen(PORT, console.log(`Listening on port ${PORT}`));
