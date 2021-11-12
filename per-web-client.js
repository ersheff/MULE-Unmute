const perArray = [0,0,0,0,0,0]

let socket

window.addEventListener('DOMContentLoaded', () => {
  socket = io()

  socket.on("connect", () => {
    console.log("Ready!")
    console.log(username)
    socket.emit("username", username)
  })

})

function perFunction(i, v) {
    perArray[i] = v
    socket.emit("per", perArray)
}