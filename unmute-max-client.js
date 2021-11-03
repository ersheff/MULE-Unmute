const max = require("max-api"),
    io = require("socket.io-client"),
    socket = io(`http://127.0.0.1:3000`)

socket.on("connect", () => {
    max.outlet("connected", 1);
})

socket.on("data", incoming => {
    max.outlet(incoming.user, incoming.data)
})