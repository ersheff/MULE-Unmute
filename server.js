const express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  io = require("socket.io")(server)

app.use("/")
server.listen(process.env.PORT || 5000), () => console.log(`Listening...`)

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