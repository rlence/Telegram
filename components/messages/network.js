const express = require('express');
const router = express.Router();

//importando modulos locales de respuesta
const response = require('../../network/response');
const controler = require('./controler');

router.get('/hola', (req,res)=>{
    console.log(req.headers);
    res.header({
        "mi-cabecera":"url todo loca"
    })
    response.success(req,res, 'todo bien en el get', 201);
});

router.post('/', (req, res) => {
    
    controler.addMessage(req.body.user, req.body.message)
    .then( fullMessage => response.success(req, res, fullMessage, 201) )
    .catch( error => response.error(req, res, 'Informacion invalida', 400, 'Error en el controler'));

})

module.exports = router;