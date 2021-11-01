const express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  io = require("socket.io")(server),
  port = process.env.port || 3000

server.listen(port, () => console.log(`Listening on port ${port}.`))
app.use(express.static("./"))

io.on("connection", socket => {
  console.log(`New connection from ${socket.id}`)
})