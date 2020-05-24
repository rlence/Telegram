const express = require('express');
const router = express.Router();

//importando modulos locales de respuesta
const response = require('../../network/response');


router.get('/hola', (req,res)=>{
    console.log(req.headers);
    res.header({
        "mi-cabecera":"url todo loca"
    })
    response.success(req,res, 'todo bien en el get', 201);
});

router.post('/', (req, res) => {
    console.log(req.query);
    if(req.query.err === 'error'){
        response.error(req, res, 'algo va mal', 500, 'Simulando error');
    }else{
        response.success(req, res, 'Todo bien');
    }
})

module.exports = router;