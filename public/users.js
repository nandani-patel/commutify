const users = [];

function usersjoined(username,room,id){
    const userdata = {username,room,id};
    users.push(userdata);
    return userdata;
}

function currentuser(id){
    return users.find(userdata => userdata.id === id);
}

function userleft(id) {
    const index = users.findIndex(user => user.id === id);
  
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
  }

module.exports = {
    usersjoined,currentuser,userleft
}