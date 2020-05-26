//inportacion de librerias
const express = require('express');
//inicializando aplicaciones de exppres;
const app = express();
const server = require('http').Server(app)

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
//importamos el db connection
const db = require('./db');
//importando rutas
const router = require('./network/routes');

//nos conectamos con la base de datos a travez de esa url
db('mongodb+srv://de_user_test:useradmin1992madridvalence@cluster0-ezd9q.mongodb.net/test');

app.use(cors());

//utilizando herramientas
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));
socket.connect(server);
/** de esta manera llamamos al archivo routesy el pasamos el server como parametro */
router(app);
app.use('/app', express.static('public'));

//servidr levantado y escuchando
server.listen(8080, ()=>{
    console.log('Escuchando en el puerto 8080');
});