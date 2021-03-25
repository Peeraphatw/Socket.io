const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

server.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

io.on("connection", (socket) => {
  console.log("user_id", socket.id);
  socket.on("goRed", (data) => {
    io.emit("goRed", data);
  });
});
