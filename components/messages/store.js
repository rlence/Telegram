const db = require('mongoose');
const Model = require('./model');

//le decimos a mongose que use las promesas que estan en el entorno globlar, configuracion de mongoose
db.Promise = global.Promise;
db.connect('mongodb+srv://de_user_test:useradmin1992madridvalence@cluster0-ezd9q.mongodb.net/test',{
    useUnifiedTopology: true,
    useNewUrlParser: true 
})
console.log('[db]: Conectada con existo')

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(){
    const messages = await Model.find();
    return messages;
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id
    })

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText
}