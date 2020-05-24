//inportacion de librerias
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//inicializando aplicaciones de exppres;
const app = express();

//importando modulos locales
const response = require('./network/response');

//utilizando herramientas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);
app.use('/app', express.static('public'));

router.post('/', (req,res)=> {
    console.log(req.query);
    console.log(req.body);
    response.success(req, res, 'todo bien desde el modulo');
});

router.get('/hola', (req,res)=>{
    console.log(req.headers);
    res.header({
        "mi-cabecera":"url todo loca"
    })
    response.success(req,res, 'todo bien en el get', 201);
});

router.post('/error', (req, res) => {
    console.log(req.query);
    if(req.query.err === 'error'){
        response.error(req, res, 'algo va mal', 400, 'Simulando error');
    }else{
        response.success(req, res, 'Todo bien');
    }
})

//servidr levantado y escuchando
app.listen(8080, ()=>{
    console.log('Escuchando en el puerto 8080');
});