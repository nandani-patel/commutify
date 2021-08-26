const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const format = require('./public/messages');
const {usersjoined, currentuser, userleft, getRoomUsers}= require('./public/users');


const app = express();
const server = http.createServer(app);

const io = socketio(server);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {

    socket.on('joinRoom', ({username,room}) => {

        const user = usersjoined(username,room, socket.id);
        socket.join(user.room);

        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });

        socket.emit('message',format('Commutify admin' ,`hello ${username} , welcome to commutify!`));
        socket.broadcast.to(user.room).emit('message',format('Commutify admin' ,`${username} has entered the chat`));

    });

    socket.on('disconnect', ()=>{

        const userleave = userleft(socket.id);
        // const user = userleft(socket.id);

        if(userleave){
            io.to(userleave.room).emit('message', format('Commutify admin' , `${userleave.username} has left the chat`));
        
            io.to(userleave.room).emit('roomUsers', {
                room: userleave.room,
                users: getRoomUsers(userleave.room)
            });
        }

    });

    socket.on('chatmsg', (text)=>{

        const curruser = currentuser(socket.id);

        console.log(text);
        io.to(curruser.room).emit('message',format(`${curruser.username}` ,text));
    });

});


server.listen(process.env.PORT || 8000, ()=>{

    console.log("server running sucessfully at port 8000");

});


