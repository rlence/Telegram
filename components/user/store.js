const Model = require('./moedel');

function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}

function listUser(){
    return Model.find();
}


module.exports = {
    add: addUser,
    list: listUser
}