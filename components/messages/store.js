const Model = require('./model');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

function getMessage(filterUser){

    return new Promise( (resolve, reject) => {
        let filter = {}
        if(filterUser !== null){
            //filtrando usuarios en mongoDB
            filter = { user: filterUser };

        }
        const messages =  Model.find(filter)
        .populate('user') //esto nos sirve para unir el id del usuario con los mensajes
        .exec((error, populate) => { //con esto ejectuamos el populate
            if(error){
                reject(error)
                return false
            }

            resolve(populate)
        })
    })
    
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id
    })

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id){
    return Model.deleteOne({
        _id:id
    })
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove:removeMessage
}