const soketIO = require('socket.io');
const socket = {};


function connect(server){
    socket.io =  soketIO(server)
}

module.exports = {
    connect,
    socket,
}