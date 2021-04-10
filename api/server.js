import express from "express";
import { connectDB } from "./db/db.js";
import http from "http";
import { Server } from "socket.io";

// importing routes
import indexRoutes from "./routes/index.js";

console.log("\n ------------- \n    API \n -------------");
const app = express();

const server = http.Server(app);
const io = new Server(server);

connectDB();

const PORT = 8000; // PORT
server.listen(PORT, console.log(`Listening on port ${PORT}`));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// using routes
app.use("/api/v1/", indexRoutes);

// websocket
io.on("connection", (socket) => {
  console.log("Socket Connected");
  socket.on("price_under", (price) => io.emit("price_under", price));
});
