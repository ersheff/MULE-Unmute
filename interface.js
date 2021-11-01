let socket

window.addEventListener('DOMContentLoaded', () => {
  const queryString = window.location.search,
    urlParams = new URLSearchParams(queryString)
  
  socket = io()

  if (urlParams.has("user")) {
    let username = urlParams.get("user")
    socket.username = username
  }

});

function updateSlider(v) {
    let readout = document.getElementById("slider-value")
    readout.innerHTML = v

    let outgoing = {
        player: socket.username,
        data: v
    }
    
    socket.emit("data", outgoing)
}