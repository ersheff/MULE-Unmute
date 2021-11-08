let socket

window.addEventListener('DOMContentLoaded', () => {
  socket = io()

  const queryString = window.location.search,
    urlParams = new URLSearchParams(queryString),
    username = urlParams.get("user")

  socket.on("connect", () => {
    console.log("Ready!")
    socket.emit("username", username)
  })

})

function updateSlider(v) {
  let valueDisplay = document.getElementById("slider-value")
  valueDisplay.innerHTML = v
  
  socket.emit("data", v)
}