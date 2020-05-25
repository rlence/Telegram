const db = require('mongoose');

//le decimos a mongose que use las promesas que estan en el entorno globlar, configuracion de mongoose
//configurando conexion con mongoDB
db.Promise = global.Promise;

//al ponerla asincrona y el awit en el db.connect, garantizamos que se conecte bien 
async function connect(url){
        await db.connect(url,{
        useUnifiedTopology: true,
        useNewUrlParser: true 
        })
    console.log('[db]: Conectada con existo')
}


module.exports = connect;