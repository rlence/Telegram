const Model = require('./moedel');

function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}


module.exports = {
    add: addUser,
}