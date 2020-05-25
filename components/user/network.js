const express = require('express');
const router = express.Router();

//importando modulos locales de respuesta
const response = require('../../network/response');
const controler = require('./controler');

router.get('/', ( req, res )=> {
    controler.listUser()
    .then( data => response.success(req, res, data, 200))
    .catch( err => response.error(req, res, 'Internat error', 500, err))
});

router.post('/', (req, res) => {

    controler.addUser(req.body.name)
    .then( data => response.success(req, res, data, 201))
    .catch( err => response.error(req, res, 'Internar Error', 500, err ));

});

module.exports = router;