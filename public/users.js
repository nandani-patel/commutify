const users = [];

function usersjoined(username,room,id){
    const userdata = {username,room,id};
    users.push(userdata);
    return userdata;
}

function currentuser(id){
    return users.find(userdata => userdata.id === id);
}

module.exports = {
    usersjoined,currentuser
}