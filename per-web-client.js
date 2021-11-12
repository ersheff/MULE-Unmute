const perArray = [0,0,0,0,0,0]

let socket

window.addEventListener('DOMContentLoaded', () => {
  socket = io()

  socket.on("connect", () => {
    console.log("Ready!")
  })

})

function perFunction(i, v) {
    perArray[i] = v
    socket.emit("per", perArray)
}