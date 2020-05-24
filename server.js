//inportacion de librerias
const express = require('express');
const bodyParser = require('body-parser');

//inicializando aplicaciones de exppres;
const app = express();

//importando rutas
const router = require('./network/routes');

//utilizando herramientas
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));

/** de esta manera llamamos al archivo routesy el pasamos el server como parametro */
router(app);
app.use('/app', express.static('public'));

//servidr levantado y escuchando
app.listen(8080, ()=>{
    console.log('Escuchando en el puerto 8080');
});