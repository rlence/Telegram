const express = require('express');
const router = express.Router();

//importando modulos locales de respuesta
const response = require('../../network/response');
const controler = require('./controler');

router.get('/', (req,res)=>{

    controler.getMessages()
    .then(messegelist => response.success( req, res,messegelist, 200 ))
    .catch(err => response.error(req, res, 'Unexpected Error', 500, err ))
});

router.post('/', (req, res) => {
    
    controler.addMessage(req.body.user, req.body.message)
    .then( fullMessage => response.success(req, res, fullMessage, 201) )
    .catch( error => response.error(req, res, 'Informacion invalida', 400, 'Error en el controler'));

})

module.exports = router;