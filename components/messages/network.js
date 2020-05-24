const express = require('express');
const router = express.Router();

//importando modulos locales de respuesta
const response = require('../../network/response');
const controler = require('./controler');

router.get('/', (req,res)=>{
    const filterMessages = req.query.user || null;
    controler.getMessages(filterMessages)
    .then(messegelist => response.success( req, res,messegelist, 200 ))
    .catch(err => response.error(req, res, 'Unexpected Error', 500, err ))
});

router.post('/', (req, res) => {
    
    controler.addMessage(req.body.user, req.body.message)
    .then( fullMessage => response.success(req, res, fullMessage, 201) )
    .catch( error => response.error(req, res, 'Informacion invalida', 400, 'Error en el controler'));

})

//patch modificacion parcial
router.patch('/:id', (req, res) => {

    console.log(req.params.id);
    controler.updateMessage(req.params.id, req.body.message)
    .then(data => response.success( req, res, data, 200 ))
    .catch(err => response.error(req, res, 'Error Interno', 500, err ));

})

router.delete('/:id',(req, res) => {
    controler.deleteMessage(req.params.id)
    .then( ()=> response.success(req, res, 'Mensaje eliminado con exito', 200))
    .catch( e => response.error(req, res, 'Error Interno', 500, e))
})

module.exports = router;