const socket = io();

const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
});

console.log(username,room);

socket.emit('joinRoom', {username , room});

socket.on('message',message => {
    console.log(message);

    send(message);
});

const  chat = document.getElementById('text');
const chatmessage = document.getElementById('messages');


chat.addEventListener('submit', (e)=>{
    e.preventDefault();

    const text = e.target.elements.msg.value;
    console.log(text);
    
    socket.emit('chatmsg', text);

    msg.value="";
});


function send(message){

    const div = document.createElement('div');
    div.classList.add('texts');

    div.innerHTML=
    `<div class="name">${message.username}</div>
    <div class="m">${message.text}</div>
    <div class="time">${message.time}</div>`;

    chatmessage.appendChild(div);

};