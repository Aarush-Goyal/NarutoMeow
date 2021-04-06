import express from "express";
import { connectDB } from "./db/db.js";
import http from "http";
import { Server } from "socket.io";

// importing routes
import indexRoutes from "./routes/index.js";

console.log(
  "    h/////////////////////////////////////////////////////////////////////////////////////////////o+ \n    h                                                                                             -+ \n    h                                                                                             -+ \n    h                                                                                             -+ \n    h                                                                                             -+ \n    h                                      ```       `````       ``                               -+ \n    h                                    .hhhh:     ohhhhhhyo.  shh+                              -+ \n    h                                    hMMMMm`    yMMdooyMMN: hMMs                              -+ \n    h                                   oMMhoMMh    yMMy``.mMMo hMMs                              -+ \n    h                                  :MMN.`dMMo   yMMNmmNMNy` hMMs                              -+ \n    h                                 .mMMmyydMMN:  yMMd///:.   hMMs                              -+ \n    h                                 hMMhssssyMMm` yMMy        hMMs                              -+ \n    h                                -yhy`     shh/ +hh+        ohh/                              -+ \n    h                                                                                             -+ \n    h                                                                                             -+ \n    h                                                                                             -+ \n    h                                                                                             -+ \n    h                                                                                             -+ \n    h/////////////////////////////////////////////////////////////////////////////////////////////++ \n    "
);

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
  io.on("message", (msg) => console.log(msg));
});
