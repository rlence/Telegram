const store = require('./store');

function addMessage( user, message){
    //..
    return new Promise( (resolve, reject) => {
        if(!user || !message){
            console.error('[messagesControler]: No hay usuario o menssaje ')
            reject('Los datos son incorrectos');
            return false
        }

        const fullMessages = {
            user,
            message,
            date:new Date(),
        }
        store.add(fullMessages)
        resolve(fullMessages)
    })
   
}

function getMessages(){
    return new Promise( (resolve, reject) => {
        resolve(store.list());

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

module.exports = {
    addMessage,
    getMessages,
    updateMessage
}