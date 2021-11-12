const express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  io = require("socket.io")(server)

server.listen(process.env.PORT || 5000), () => console.log(`Listening...`)
app.use(express.static("./"))


io.on("connection", socket => {

  socket.on("username", username => {
    socket.username = username
    console.log(`New connection from ${socket.username}`)
  })

  socket.on("data", data => {
    let outgoing = {
      user: socket.username,
      data: data
    }
    io.emit("data", outgoing)
  })

  socket.on("per", data => {
    console.log(data)
    io.emit("per", data)
  })
  
})