const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
    // console.log("new connection formed");
    socket.emit('message','welcome to commutify!');
})

server.listen(8000, ()=>{
    console.log("server running sucessfully at port 8000");
})


