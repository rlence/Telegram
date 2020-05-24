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
        console.log(fullMessages)
        resolve(fullMessages)
    })
   
}

module.exports = {
    addMessage,
}