const socket = io();

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
    `<div class="name">NAME</div>
    <div class="m">${message}</div>
    <div class="time">11:45pm</div>`;

    chatmessage.appendChild(div);

};