import express from "express";

// importing routes
import indexRoutes from "./routes/index.js";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// using routes
app.use("/api/v1/", indexRoutes);

const PORT = 8000;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
