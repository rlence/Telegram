const express = require('express');
const router = express.Router();

//importando modulos locales de respuesta
const response = require('../../network/response');
const controler = require('./controler');

router.post('/', (req, res) => {

    controler.addUser(req.body.name)
    .then( data => response.success(req, res, data, 201))
    .catch( err => response.error(req, res, 'Internar Error', 500, err ));

});

module.exports = router;