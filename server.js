//inportacion de librerias
const express = require('express');
const bodyParser = require('body-parser');

//importamos el db connection
const db = require('./db');

//inicializando aplicaciones de exppres;
const app = express();

//importando rutas
const router = require('./network/routes');

//nos conectamos con la base de datos a travez de esa url
db('mongodb+srv://de_user_test:useradmin1992madridvalence@cluster0-ezd9q.mongodb.net/test');


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