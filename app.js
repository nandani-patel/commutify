const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {

    socket.on('disconnect', ()=>{
        io.emit('message',`a user has left the chat`);
    });

    socket.emit('message','welcome to commutify!');

    socket.broadcast.emit('message',`a user has entered the chat`);

    socket.on('chatmsg', (text)=>{
        console.log(text);
        io.emit('message',text);
    });
});

server.listen(8000, ()=>{
    console.log("server running sucessfully at port 8000");
});


