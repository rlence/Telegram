const store = require('./store');
const socket = require('../../socket').socket;

function addMessage(chat, user, message, file){
    //..
    return new Promise( (resolve, reject) => {
        if(!user || !message){
            console.error('[messagesControler]: No hay usuario o menssaje ')
            reject('Los datos son incorrectos');
            return false
        }

        let fileUrl = '';
        if(file){
            fileUrl = 'http//localhost:3000/app/files/'+ file.filename;
        }

        const fullMessages = {
            chat,
            user,
            message,
            date:new Date(),
            file: fileUrl
        }
        store.add(fullMessages)

        socket.io.emit('message', fullMessages)


        resolve(fullMessages)
    })
   
}

function getMessages(filterUser){
    return new Promise( (resolve, reject) => {
        resolve(store.list(filterUser));

    })
}

function updateMessage(id, message){

    return new Promise( async (resolve, reject) => {
        
        if(!id || !message){
            reject('Invalid Data')
            return false;
        }

        const result = await store.updateText(id, message)
        resolve(result)
    })

}

function deleteMessage(id){

    return new Promise( (resolve, reject)=>{
        if(!id){
            reject('Id invalido')
            return false
        }
        store.remove(id)
        .then(()=> resolve())
        .catch(err => reject(e))
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}