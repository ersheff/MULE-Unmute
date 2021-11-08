const express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  io = require("socket.io")(server),
  port = process.env.port || 3000

server.listen(port, () => console.log(`Listening on port ${port}.`))

io.on("connection", socket => {
  console.log(`New connection from ${socket.id}`)
  /*  
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
*/
})