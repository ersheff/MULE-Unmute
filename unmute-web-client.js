let socket

window.addEventListener('DOMContentLoaded', () => {
  socket = io()

  const queryString = window.location.search,
    urlParams = new URLSearchParams(queryString),
    username = urlParams.get("user")

  socket.on("connect", () => {
    console.log("Ready!")
    console.log(username)
    socket.emit("username", username)
  })

})