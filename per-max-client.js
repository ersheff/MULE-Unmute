const max = require("max-api"),
    io = require("socket.io-client"),
    socket = io(`https://mule-unmute.herokuapp.com`)

socket.on("connect", () => {
    max.outlet("connected", 1);
})

socket.on("per", incoming => {
    max.outlet("per", incoming)
})