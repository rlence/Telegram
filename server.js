//inportacion de librerias
const express = require('express');
//inicializando aplicaciones de exppres;
const app = express();
const server = require('http').Server(app)

const config = require('./config');

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
//importamos el db connection
const db = require('./db');
//importando rutas
const router = require('./network/routes');

//nos conectamos con la base de datos a travez de esa url
db(config.dbUrl);

app.use(cors());

//utilizando herramientas
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));
socket.connect(server);
/** de esta manera llamamos al archivo routesy el pasamos el server como parametro */
router(app);
app.use(config.publicRoute, express.static('public'));

//servidr levantado y escuchando
server.listen(config.port, ()=>{
    console.log(`Listen in ${config.host}:${config.port}`);
});