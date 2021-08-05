const socket = io();

socket.on('message',message => {
    console.log(message);

    send(message);
});

const  chat = document.getElementById('text');

const chatmessage = document.getElementById('right');


chat.addEventListener('submit', (e)=>{
    e.preventDefault();

    const text = e.target.elements.msg.value;
    console.log(text);
    
    socket.emit('chatmsg', text);

    msg.value="";
});


function send(message){

    const div = document.createElement('div');
    div.classList.add('message');

    div.innerHTML=`${message}`;

    chatmessage.appendChild(div);
    
};