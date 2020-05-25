const sotre = require('./store');

function addUser(name){
    
    if(!name){
        return Promise.reject('Invalid Name');
    }

    const user = {
        name,
    };
    return sotre.add(user);
}

module.exports = {
    addUser,
}